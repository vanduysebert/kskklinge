import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {NieuwsService} from './../nieuws.service';
import { Nieuws } from './../nieuws';

@Component({
  selector: 'app-edit-nieuws',
  templateUrl: './edit-nieuws.component.html',
  styleUrls: ['./edit-nieuws.component.scss']
})
export class EditNieuwsComponent implements OnInit {
  news: Nieuws;
  param: number;
  playDate: Date;

  constructor(location: Location, private router: Router, private nieuwsService: NieuwsService) {
    router.events.subscribe((val) => {
      let s: string;
      let v: number;
      s = location.path();
      v = s.lastIndexOf("/")
      this.param = +s.substring(v+1, s.length)
    });
  }

  onSubmit() {
    this.playDate = new Date(this.news.datum);
    this.news.datum = moment(this.playDate).format('YYYY-MM-DD HH-mm-ss');

    this.nieuwsService.editNieuws(this.news).subscribe(res => {
      if (res == "OK") {
        // this.snackBar.open(this.news.titel + " succesvol aangepast. " ,"", {
        //   duration: 2000
        // });
        this.router.navigateByUrl('/api/nieuws').then(()=>{
          location.reload();
         }
        );
      }
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
