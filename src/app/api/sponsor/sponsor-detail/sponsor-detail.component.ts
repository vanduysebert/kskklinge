import { Component, OnInit } from '@angular/core';
import {SponsorService} from './../sponsor.service';
import { Sponsor }           from './../sponsor';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {AppSettings} from '../../../app-settings';

@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.scss']
})
export class SponsorDetailComponent implements OnInit {

  sponsor: Sponsor;
  param: number;
  constructor(location: Location, private route: ActivatedRoute, private sponsorService: SponsorService) {
    route.params.subscribe( p => {
      this.param = p['id'];
    });
   }

  loadSponsor() {
    this.sponsorService.getSponsor(this.param).subscribe(
      sponsor => {
        this.sponsor = sponsor;

      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadSponsor();
  }


}
