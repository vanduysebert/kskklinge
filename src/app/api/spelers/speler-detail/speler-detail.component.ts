import { Component, OnInit } from '@angular/core';
import {SpelersService} from './../spelers.service';
import { Speler }           from './../speler';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';

@Component({
  selector: 'app-speler-detail',
  templateUrl: './speler-detail.component.html',
  styleUrls: ['./speler-detail.component.scss']
})
export class SpelerDetailComponent implements OnInit {
  player: Speler;
  param: number;
  constructor(location: Location, private route: ActivatedRoute, private spelerService: SpelersService) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
   }

  loadPlayer() {
    this.spelerService.getPlayer(this.param).subscribe(
      speler => {
        this.player = speler;

      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadPlayer();
  }

}
