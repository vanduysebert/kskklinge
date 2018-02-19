import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';
import * as moment from 'moment';
import {NieuwsService} from './../nieuws.service';
import { Nieuws } from './../nieuws';
import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from './../../../user/authentication.service';
@Component({
  selector: 'app-nieuws-nieuw',
  templateUrl: './nieuws-nieuw.component.html',
  styleUrls: ['./nieuws-nieuw.component.scss']
})
export class NieuwsNieuwComponent implements OnInit {
  news: Nieuws = new Nieuws(0, "", "", "", "", 2, false, 150);
  time: string;
  playDate: Date;
  froalaOptions:Object = {
    charCounterCount: false,
    imageMaxSize: 1024 * 1024 * 5,
    imageUploadURL: AppSettings.API_ENDPOINT + 'nieuws/upload',
    videoUpload: false,
    fileUpload: false,
    requestHeaders: {
      Authorization: 'Bearer ' + this.authenticationService.token
    }
  }


  constructor(private authenticationService: AuthenticationService,private router: Router, private nieuwsService: NieuwsService, private snackBar: MatSnackBar) {

  }



  onSubmit() {
    if (this.news.eventDate && this.news.newsType == 1) {
      this.playDate = new Date(this.news.eventDate);
      this.news.eventDate = moment(this.playDate).format('YYYY-MM-DD HH-mm-ss');
    } else {
      this.news.eventDate = null;
    }


    this.news.datum = moment().format('YYYY-MM-DD HH-mm-ss');
    console.log(this.news);
    this.nieuwsService.addNewNieuws(this.news).subscribe(res => {
      if (res == "OK") {
        this.snackBar.open(this.news.titel + " succesvol aangemaakt. " ,"", {
          duration: 2000
        });
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
