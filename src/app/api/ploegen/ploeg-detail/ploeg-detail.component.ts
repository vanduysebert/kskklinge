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

@Component({
  selector: 'app-ploeg-detail',
  templateUrl: './ploeg-detail.component.html',
  styleUrls: ['./ploeg-detail.component.scss']
})
export class PloegDetailComponent implements OnInit {
  ploeg: Ploeg;
  spelers: Speler[];
  time: string;
  param: number
  constructor(location: Location, router: Router, private ploegService: PloegenService,private spelersService: SpelersService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
    });
  }


  loadSpelers() {
    this.ploegService.getSpelersByTeam(this.param).subscribe(
      spelers => {
        this.spelers = spelers;
        console.log(spelers)
      },
      err => {
        console.log(err);
      });
  }

  deletePlayer(id: number, speler:string, spelerVoornaam: string) {
    console.log(speler);
    

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
