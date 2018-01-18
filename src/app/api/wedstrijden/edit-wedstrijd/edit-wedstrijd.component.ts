import { Component, OnInit } from '@angular/core';
import {PloegenService} from '../../ploegen/ploegen.service';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {WedstrijdService} from './../wedstrijd.service';
import { Wedstrijd } from './../wedstrijd';
import {Ploeg} from '../../ploegen/ploeg';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-edit-wedstrijd',
  templateUrl: './edit-wedstrijd.component.html',
  styleUrls: ['./edit-wedstrijd.component.scss']
})
export class EditWedstrijdComponent implements OnInit {
  game: Wedstrijd;
  param: number;
  ploegen: Ploeg[];
  playDate: Date;
  selected = new FormControl('valid', [
   Validators.required
 ]);

  constructor(location: Location, private route: ActivatedRoute, private router: Router, private ploegenService : PloegenService, private wedstrijdService: WedstrijdService, private localeService: BsLocaleService, private snackBar: MatSnackBar) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
    localeService.use('nl');
    // router.events.subscribe((val) => {
    //   let s: string;
    //   let v: number;
    //   s = location.path();
    //   v = s.lastIndexOf("/")
    //   this.param = +s.substring(v+1, s.length)
    // });
  }

  onSubmit() {
    this.playDate = new Date(this.game.datum);
    this.game.datum = moment(this.playDate).format('YYYY-MM-DD HH-mm-ss');

    this.wedstrijdService.editWedstrijd(this.game).subscribe(res => {
      if (res == "OK") {
        let thuis: string;
        if (this.game.thuisSpelend) {
          thuis = "(T)";
        } else{
          thuis = "(U)";
        }
        this.snackBar.open("Verslag Klinge " + this.game.ploegNaam + ' - ' + this.game.tegenstander + " succesvol aangepast. " + thuis,"", {
          duration: 2000
        });
        this.router.navigateByUrl('/api/wedstrijden').then(()=>{
          location.reload();
         }
        );
      }
    });

  }

  loadPloegen() {
    this.ploegenService.getPloegen().subscribe(
      ploegen => {
        this.ploegen = ploegen;
      },
      err => {
        console.log(err);
      });
  }

  loadGame() {
    console.log(this.param);
    this.wedstrijdService.getWedstrijd(this.param).subscribe(
      game => {
        this.game = game;
    },
    err => {
      console.log(err);
    });
  }

  setTeamName(ev: any):void {
    for (let l of this.ploegen) {
      if (l.ploeg_id == ev.target.value) {
        this.game.ploegNaam = l.naam;
      }
    }
  }

  ngOnInit() {
    this.loadPloegen();
    this.loadGame();
  }


}
