import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  isRootRoute: boolean = false;
  path: string;
  public location: string = "";
  route: ActivatedRoute;
  constructor(location: Location, router: Router, public _route: ActivatedRoute) {
    this.route = _route;

  }

  ngOnInit() {

  }

}
