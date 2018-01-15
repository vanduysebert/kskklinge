import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {NieuwsService} from './../nieuws.service';
import { Nieuws } from './../nieuws';

@Component({
  selector: 'app-nieuws-detail',
  templateUrl: './nieuws-detail.component.html',
  styleUrls: ['./nieuws-detail.component.scss']
})
export class NieuwsDetailComponent implements OnInit {

  news: Nieuws;
  param: number;

  constructor(location: Location, private router: Router, private nieuwsService: NieuwsService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
    });
  }

  loadNews() {
    this.nieuwsService.getNieuws(this.param).subscribe(
      news => {
      this.news = news;
    },
    err => {
      console.log(err);
    });
  }


  ngOnInit() {
    this.loadNews();
  }

}
