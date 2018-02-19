import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {NieuwsService} from './../nieuws.service';
import { Nieuws } from './../nieuws';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-nieuws',
  templateUrl: './edit-nieuws.component.html',
  styleUrls: ['./edit-nieuws.component.scss']
})
export class EditNieuwsComponent implements OnInit {
  news: Nieuws;
  param: number;
  playDate: Date;
  cat: number;
  froalaOptions:Object = {
    events : {
      'froalaEditor.image.error' : function(e, editor, error, response) {
        console.log("err");

        console.log(error);
      },
      'froalaEditor.image.uploaded': function (e, editor, response) {
        console.log("uploaded");
        console.log(response);
      }

    },
    charCounterCount: false,
    imageMaxSize: 1024 * 1024 * 5,
    imageUploadURL: AppSettings.API_ENDPOINT + 'nieuws/upload',
    videoUpload: false,
    fileUpload: false
  }

  constructor(location: Location, private route:ActivatedRoute, private router: Router, private nieuwsService: NieuwsService, private snackBar: MatSnackBar) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
  }

  onSubmit() {
    if(this.news.eventDate && this.cat == 1) {
      this.playDate = new Date(this.news.eventDate);
      this.news.eventDate = moment(this.playDate).format('YYYY-MM-DD HH-mm-ss');
      console.log("datum");
    } else {
      this.news.eventDate = null;
      console.log("geen datum");
    }

    let pDate = new Date(this.news.datum);
    this.news.datum = moment(pDate).format('YYYY-MM-DD HH-mm-ss');
    this.news.newsType = this.cat;
    console.log(this.news);
    this.nieuwsService.editNieuws(this.news).subscribe(res => {
      console.log(res);
      if (res == "OK") {
        this.snackBar.open(this.news.titel + " succesvol aangepast. " ,"", {
          duration: 2000
        });
        this.router.navigate(["../../"], { relativeTo: this.route, skipLocationChange: true });
      }
    });

  }


  loadNews() {
    this.nieuwsService.getNieuws(this.param).subscribe(
      news => {
      this.news = news;
      if(this.news.newsType == "evenementen") {
        this.cat = 1;
      } else if (this.news.newsType == "jeugd") {
        this.cat = 3;
      } else {
        this.cat = 2;
      }
    },
    err => {
      console.log(err);
    });
  }


  ngOnInit() {
    this.loadNews();
  }

}
