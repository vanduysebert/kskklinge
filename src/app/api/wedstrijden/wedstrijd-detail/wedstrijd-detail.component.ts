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
  constructor(location: Location, private router: Router, private wedstrijdService: WedstrijdService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
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
