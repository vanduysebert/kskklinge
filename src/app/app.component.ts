import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInAnim', [
       state('true', style({
            transform: 'translate3d(0, 0, 0)', display:'block'
          })),
          state('false', style({
            transform: 'translate3d(100%, 0, 0)', display: 'none'
          })),
          transition('true => false', animate('200ms ease-in-out')),
          transition('false => true', animate('200ms ease-in-out'))
 ]),
 trigger('fadeInAnim2', [
    state('true', style({
         transform: 'translate3d(0, 0, 0)', display:'block'
       })),
       state('false', style({
         transform: 'translate3d(100%, 0, 0)', display: 'none'
       })),
       transition('true => false', animate('200ms ease-in-out')),
       transition('false => true', animate('300ms ease-in-out'))
]),
trigger('fadeInAnim3', [
   state('true', style({
        transform: 'translate3d(0, 0, 0)', display:'block'
      })),
      state('false', style({
        transform: 'translate3d(100%, 0, 0)', display: 'none'
      })),
      transition('true => false', animate('200ms ease-in-out')),
      transition('false => true', animate('400ms ease-in-out'))
]),
trigger('fadeInAnim4', [
   state('true', style({
        transform: 'translate3d(0, 0, 0)', display:'block'
      })),
      state('false', style({
        transform: 'translate3d(100%, 0, 0)', display: 'none'
      })),
      transition('true => false', animate('200ms ease-in-out')),
      transition('false => true', animate('500ms ease-in-out'))
]),
     // Define animations here.

  ]
})
export class AppComponent implements OnInit {
  route: string;
  screen: number;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  sbOpen: boolean = true;
  constructor(location: Location, router: Router,activeRoute: ActivatedRoute, ngZone:NgZone) {
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
        if (val instanceof NavigationEnd) {
          if(this.route.startsWith('senioren')) {
            this.show1 = true;
            this.show2 = false;
            this.show3 = false;
          } else if (this.route.startsWith('jeugd')) {
            this.show2 = true;
            this.show1 = false;
            this.show3 = false;
          } else if (this.route.startsWith('club')) {
            this.show3 = true;
            this.show1 = false;
            this.show2 = false;
          }
        }
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

  sidebarToggle() {
    this.sbOpen = !this.sbOpen;
  }

  showTeam() {
    this.show1 = !this.show1;
    this.show2 = false;
    this.show3 = false;
  }
  showYouth() {
    this.show2 = !this.show2;
    this.show1 = false;
    this.show3 = false;
  }

  showClub() {
    this.show3 = !this.show3;
    this.show2 = false;
    this.show1 = false;
  }

  ngOnInit() {

  }

  resizeWindow() {

  }

}
