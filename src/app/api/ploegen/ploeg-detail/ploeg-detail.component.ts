import { Component, OnInit } from '@angular/core';
import {PloegenService} from './../ploegen.service'
import { Ploeg }           from './../ploeg';
import { Speler }           from './../../spelers/speler';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { URLSearchParams } from '@angular/http';
import {SpelersService} from './../../spelers/spelers.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { SponsorService } from './../../sponsor/sponsor.service';
import { Sponsor } from './../../sponsor/sponsor';

@Component({
  selector: 'app-ploeg-detail',
  templateUrl: './ploeg-detail.component.html',
  styleUrls: ['./ploeg-detail.component.scss']
})
export class PloegDetailComponent implements OnInit {
  ploeg: Ploeg;
  spelers: Speler[];
  time: string;
  param: number;
  sponsor: Sponsor;
  constructor(location: Location, route: ActivatedRoute, private ploegService: PloegenService,private spelersService: SpelersService, private sponsorSvc: SponsorService) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
  }


  loadSpelers() {
    this.ploegService.getSpelersByTeam(this.param).subscribe(
      spelers => {
        this.spelers = spelers;
      },
      err => {
        console.log(err);
      });
  }


  loadPloeg() {
    this.ploegService.getPloeg(this.param).subscribe(
      ploeg => {
        let t: string;
        this.ploeg = ploeg;
        t = ploeg.trainingsuur;
        if (t) {
          this.time = t.substr(0,5);
        }
        this.sponsorSvc.getSponsor(this.ploeg.sponsor_id).subscribe(
          sponsor => {
            this.sponsor = sponsor;
          }
        )
      },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.loadPloeg()
    this.loadSpelers()
  }

}
