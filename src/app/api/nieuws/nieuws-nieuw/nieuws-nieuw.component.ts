import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {NieuwsService} from './../nieuws.service';
import { Nieuws } from './../nieuws';


@Component({
  selector: 'app-nieuws-nieuw',
  templateUrl: './nieuws-nieuw.component.html',
  styleUrls: ['./nieuws-nieuw.component.scss']
})
export class NieuwsNieuwComponent implements OnInit {
  news: Nieuws = new Nieuws(0, "", "", "");
  param: number;
  time: string;
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

    this.nieuwsService.addNewNieuws(this.news).subscribe(res => {
      if (res == "OK") {
        // this.snackBar.open(this.news.titel + " succesvol aangemaakt. " ,"", {
        //   duration: 2000
        // });
        this.router.navigateByUrl('/api/nieuws').then(()=>{
          location.reload();
         }
        );
      }
    });

  }

  ngOnInit() {
  }


}
