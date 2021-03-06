import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Component, OnInit, NgZone, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';
import {Sponsor} from './api/sponsor/sponsor';
import {SponsorService} from './api/sponsor/sponsor.service';
import {Signup} from './api/signups/signup';
import {SignupService} from './api/signups/signup.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MatSnackBar} from '@angular/material';
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
  subscriber: Signup = new Signup(0, "", "", "", "");
  route: string;
  screen: number;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  sbOpen: boolean = true;
  height: number;
  isLoaded: boolean = false;
  mainSponsors: Sponsor[];
    modalRef: BsModalRef;
  @ViewChild('app') elementView: ElementRef;

  constructor(private snackBar: MatSnackBar,private modalService: BsModalService, location: Location, router: Router,activeRoute: ActivatedRoute, ngZone:NgZone, private sponsorSVC: SponsorService, private signupService:SignupService) {
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

  newSignupAdded(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  links: string[] = ["test", "test2"];

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

  loadMainSponsors() {
    this.sponsorSVC.getMainSponsors().subscribe(
      sponsors => {
        this.mainSponsors= sponsors;
      },
      err => {
        console.log(err);
      });
  }



  ngOnInit() {
    this.loadMainSponsors();
  }

  ngAfterViewInit() {


  }

  resizeWindow() {

  }

}
