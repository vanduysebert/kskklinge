import { Component, OnInit } from '@angular/core';
import {NieuwsService} from './../../api/nieuws/nieuws.service';
import { Nieuws }           from './../../api/nieuws/nieuws';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-club-nieuws',
  templateUrl: './club-nieuws.component.html',
  styleUrls: ['./club-nieuws.component.scss']
})
export class ClubNieuwsComponent implements OnInit {

  events: Nieuws[];

  showID: number;
  fragment: string="";

  constructor(private newsSvc: NieuwsService, private router: Router, private route: ActivatedRoute) { }

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

  loadClubNieuws() {
    this.newsSvc.getNewsClub().subscribe(ev => {
      this.events = ev;
      let l = this.events.length;
      if (l > 0) {
        this.showID = this.events[0].nieuws_id;
        this.showEventDetail(this.events[0].nieuws_id);
      }
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
    this.loadClubNieuws();
    this.router.events.subscribe((evt) => {
       if (!(evt instanceof NavigationEnd)) {
           return;
       }
       window.scrollTo(0, 0)
   });
  }

}
