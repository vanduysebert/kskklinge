import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route: string;
  screen: number;
  constructor(location: Location, router: Router, ngZone:NgZone) {

    this.screen = window.innerWidth;
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.screen = window.innerWidth;
        });
    };
    router.events.subscribe((val) => {

      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });

  }

  links: string[] = ["test", "test2"];

  checkPath(): boolean {
    if (this.route == null){
      return true;
    }
    let path: string;
      if (this.route.startsWith('/api')) {
          return false;
        } else {
          return true;
        }

  }

  ngOnInit() {

  }

  resizeWindow() {

  }

}
