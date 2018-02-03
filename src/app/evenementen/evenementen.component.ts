import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {NieuwsService} from './../api/nieuws/nieuws.service';
import { Nieuws }           from './../api/nieuws/nieuws';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-evenementen',
  templateUrl: './evenementen.component.html',
  styleUrls: ['./evenementen.component.scss']
})
export class EvenementenComponent implements OnInit {
  events: Nieuws[];
  pastEvents: Nieuws[];

  showID: number;
  fragment: string="";

  constructor(private newsSvc: NieuwsService, private router: Router, private route: ActivatedRoute) { }

  loadFutureEvents() {
    this.newsSvc.getUpcomingEventsAll().subscribe(ev => {
      this.events = ev;
    });

  }

  addToGoogleCalendar(event: Nieuws) {
    let url: string;
    let d: string;
    d = moment(event.eventDate).format("YYYYMMDDTHHmmss");
    url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + event.titel + "&dates="+ d +"Z/" + d + "Z&details=Evenement+bij+KSK+Klinge&location=Buitenstraat+9,+9170+De+Klinge&sf=true&output=xml"
    window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      );
  }

  loadPastEvents() {
    this.newsSvc.getPastEvents().subscribe(ev => {
      this.pastEvents = ev;
    });
  }

  showEventDetail(id:number) {
    if(id == this.showID) {
      return true;
    } else {
      return false;
    }
  }

  showContent(id:number) {
    if (this.showID == id) {
      this.showID = 0;
    } else {
      this.showID = id;
    }

  }

  ngOnInit() {
    this.loadFutureEvents();
    this.loadPastEvents();
    this.router.events.subscribe((evt) => {
       if (!(evt instanceof NavigationEnd)) {
           return;
       }
       window.scrollTo(0, 0)
   });
  }



}
