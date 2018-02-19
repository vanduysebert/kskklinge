import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { trigger, style, animate, transition } from '@angular/animations';
import {Nieuws} from './../api/nieuws/nieuws';
import {Wedstrijd} from './../api/wedstrijden/wedstrijd';
import {NieuwsService} from './../api/nieuws/nieuws.service';
import {WedstrijdService} from './../api/wedstrijden/wedstrijd.service';
import {SpelersService} from './../api/spelers/spelers.service';
import {Speler} from './../api/spelers/speler';
import {Signup} from './../api/signups/signup';
import {SignupService} from './../api/signups/signup.service';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import {EasingLogic} from 'ng2-page-scroll';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MatSnackBar} from '@angular/material';
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
  birthdayPlayers: Speler[];
  lastGame: Wedstrijd;
  hovered: boolean;
  modalRef: BsModalRef;
  subscriber: Signup = new Signup(0, "", "", "", "");

	constructor(private snackBar: MatSnackBar,private signupService: SignupService, private modalService: BsModalService, private eventSvc: NieuwsService, private gameSvc: WedstrijdService, private router: Router, private spelerSvc:SpelersService) {

  }

  checkIfBirthdays(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addToNewsletter(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    let sign = this.subscriber;
    this.signupService.addNewSignup(this.subscriber).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
        this.snackBar.open("Bedankt "  + sign.voornaam + ", om u aan te melden voor de nieuwsbrief. U ontvangt vanaf nu alle laatste nieuwtjes via mail!","", {
          duration: 3000,
          panelClass: ['bg-primary', 'text-white', 'p4', 'bigText']
        });
        this.subscriber = new Signup(0, "", "", "", "");
      } else if (res.status == "error" && res.errorCode == 1) {
        this.snackBar.open("Er heeft zich een probleem voorgedaan. Probeer het opnieuw of contacteer ons als het probleem blijft!","", {
          duration: 4000,
          panelClass: ['bg-danger', 'text-white', 'p4', 'bigText']
        });
         this.subscriber = new Signup(0, "", "", "", "");
      } else if (res.status == "error" && res.errorCode == 2 ) {
        this.snackBar.open(sign.email + " is reeds aangemeld voor de nieuwsbrief!","", {
          duration: 3000,
          panelClass: ['bg-warning', 'text-primary', 'p4', 'bigText']
        });
         this.subscriber = new Signup(0, "", "", "", "");
      }
    });
    this.modalRef.hide();
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

  setImage(status:boolean) {
    this.hovered = status;
  }

  loadBirthdayPlayers() {
    this.spelerSvc.getBirthdayPlayers().subscribe(
      players => {
        this.birthdayPlayers = players;
      }
    )
  }

  ngOnInit() {
    this.loadEvents();
    this.loadLastGame();
    this.loadNews();
    this.loadBirthdayPlayers();
    this.router.events.subscribe((evt) => {
      console.log("top");
       if (!(evt instanceof NavigationEnd)) {
           return;
       }
       window.scrollTo(0, 0)
   });
   this.hovered = false;
  }





}
