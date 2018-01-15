import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        
      ]
    )
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  slide: number = 1;
  src: string;

	constructor(location: Location, router: Router) {
    this.slide = 1;
    this.src = "assets/img/main" + this.slide +".jpg";
  }

  ngOnInit() {

    let timer = Observable.timer(10000,10000);
    timer.subscribe((t)=> {
      if (this.slide < 4) {
        this.slide = this.slide + 1;
      } else {
        this.slide = 1;
      }
    }
    );
  }

}
