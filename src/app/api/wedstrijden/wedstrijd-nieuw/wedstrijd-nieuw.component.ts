import { Component, OnInit } from '@angular/core';
import {PloegenService} from '../../ploegen/ploegen.service';
import {Ploeg} from '../../ploegen/ploeg';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {WedstrijdService} from './../wedstrijd.service';
import { Wedstrijd } from './../wedstrijd';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-wedstrijd-nieuw',
  templateUrl: './wedstrijd-nieuw.component.html',
  styleUrls: ['./wedstrijd-nieuw.component.scss']
})
export class WedstrijdNieuwComponent implements OnInit {
  game: Wedstrijd = new Wedstrijd(0, true, "", "", "", 0,0,0,"");
  param: number;
  time: string;
  ploegen: Ploeg[];
  kskTeam: string;
  playDate: Date;
  selected = new FormControl('valid', [
   Validators.required
 ]);


  constructor(location: Location, private router: Router, private ploegenService : PloegenService, private wedstrijdService: WedstrijdService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
    });
  }



  onSubmit() {
    this.playDate = new Date(this.game.datum);
    this.game.datum = moment(this.playDate).format('YYYY-MM-DD HH-mm-ss');

    this.wedstrijdService.addNewWedstrijd(this.game).subscribe(res => {
      if (res == "OK") {
        let thuis: string;
        if (this.game.thuisSpelend) {
          thuis = "(T)";
        } else{
          thuis = "(U)";
        }
        // this.snackBar.open("Verslag Klinge " + this.game.ploegNaam + ' - ' + this.game.tegenstander + " succesvol aangemaakt. " + thuis,"", {
        //   duration: 2000
        // });
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

  setTeamName(ev: any):void {
    console.log(ev.value);
    for (let l of this.ploegen) {
      if (l.ploeg_id == ev.value) {
        this.game.ploegNaam = l.naam;
      }
    }
  }

  ngOnInit() {
    this.loadPloegen();
  }

}
