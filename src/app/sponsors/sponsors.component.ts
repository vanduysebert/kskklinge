import { Component, OnInit } from '@angular/core';
import { SponsorService} from './../api/sponsor/sponsor.service';
import {Sponsor} from './../api/sponsor/sponsor';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors: Sponsor[];
  constructor(private sponsorSVC: SponsorService) { }

  loadSponsors() {
    this.sponsorSVC.getSponsors().subscribe(
      sponsors => {
        this.sponsors= sponsors;
      },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.loadSponsors();
  }

}
