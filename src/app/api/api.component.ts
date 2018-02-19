import { Component, OnInit, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './../user/authentication.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  isRootRoute: boolean = false;
  path: string;
  public location: string = "";
  loading:boolean = false;
  error:string = '';
  loggedIn: boolean = true;
  model: any = {};
  expired: boolean;
  router: Router;
  route: ActivatedRoute;
  constructor(private changeDetector: ChangeDetectorRef, location: Location, router: Router, public _route: ActivatedRoute, private authenticationService: AuthenticationService, private snackBar: MatSnackBar) {
    _route.params.subscribe(val => {

      });
    this.route = _route;
    this.router = router;
  }

  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.loggedIn = true;
                    this.loading = false;
                    // login successful
                    //this.router.navigate(['/']);
                } else {
                    // login failed
                    this.loggedIn = false;
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

  logout() {
    this.authenticationService.logout();
    this.loggedIn = false;
  }

  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser')) {
      if (this.authenticationService.tokenIsNotExpired()) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }


    } else {
      this.loggedIn =  false;
    }


  }




}
