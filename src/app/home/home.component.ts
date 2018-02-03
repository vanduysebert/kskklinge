import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { trigger, style, animate, transition } from '@angular/animations';
import {Nieuws} from './../api/nieuws/nieuws';
import {Wedstrijd} from './../api/wedstrijden/wedstrijd';
import {NieuwsService} from './../api/nieuws/nieuws.service';
import {WedstrijdService} from './../api/wedstrijden/wedstrijd.service';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import {EasingLogic} from 'ng2-page-scroll';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  slide: number = 1;
  src: string;
  events: Nieuws[];
  news: Nieuws[];
  lastGame: Wedstrijd;

	constructor(private eventSvc: NieuwsService, private gameSvc: WedstrijdService, private router: Router) {

  }



  myEasing: EasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            t /= d / 2;
	          // tslint:disable-next-line:curly
	          // tslint:disable-next-line:indent
	          // tslint:disable-next-line:curly
	          if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	          // tslint:disable-next-line:indent
	          t -= 2;
	          return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
        }
    };

  loadEvents() {
    this.eventSvc.getUpcomingEvents().subscribe(
      ev => {
        console.log(ev);
        this.events = ev;
      });
  }

  loadLastGame() {
    this.gameSvc.getLastGame().subscribe(
      game => {
        console.log(game);
        this.lastGame = game;
      }
    )
  }

  loadNews() {
    this.eventSvc.getLatestNews().subscribe(
      news => {
        this.news = news;
      }
    )
  }

  ngOnInit() {
    this.loadEvents();
    this.loadLastGame();
    this.loadNews()
    this.router.events.subscribe((evt) => {
      console.log("top");
       if (!(evt instanceof NavigationEnd)) {
           return;
       }
       window.scrollTo(0, 0)
   });
  }





}
