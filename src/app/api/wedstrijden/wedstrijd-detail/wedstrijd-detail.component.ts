import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {WedstrijdService} from './../wedstrijd.service';
import { Wedstrijd } from './../wedstrijd';

@Component({
  selector: 'app-wedstrijd-detail',
  templateUrl: './wedstrijd-detail.component.html',
  styleUrls: ['./wedstrijd-detail.component.scss']
})
export class WedstrijdDetailComponent implements OnInit {
  game: Wedstrijd;
  param: number;
  constructor(location: Location, private route: ActivatedRoute, private wedstrijdService: WedstrijdService) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
   }

   loadGame() {
     this.wedstrijdService.getWedstrijd(this.param).subscribe(
       game => {
       this.game = game;
     },
     err => {
       console.log(err);
     });
   }

  ngOnInit() {
    this.loadGame();
  }

}
