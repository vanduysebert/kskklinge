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

  constructor(location: Location, private route: ActivatedRoute, private nieuwsService: NieuwsService) {
    route.params.subscribe( p => {
      this.param = p['id'];
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
