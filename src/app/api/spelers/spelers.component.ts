import { Component, OnInit } from '@angular/core';
import {SpelersService} from './spelers.service'
import { Speler }           from './speler';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.scss']
})
export class SpelersComponent implements OnInit {
  spelers: Speler[];
  isRootRoute: boolean = false;
  public changed: boolean;

  constructor(location: Location, protected router: Router, activeRoute: ActivatedRoute, protected spelersService: SpelersService) {
    router.events.subscribe((val) => {
      console.log("ev");
      if (location.path() == "/api/spelers") {
        this.isRootRoute = true;
      } else {
        this.isRootRoute = false;
      }
    });
  }

  deletePlayer(id: number, speler:string, spelerVoornaam: string) {


  }

  edited(success: boolean) {
    if (success == true) {
      this.loadPlayers();
    }
  }

  loadPlayers() {
    this.spelersService.getSpelers().subscribe(
      spelers => {
        this.spelers = spelers;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadPlayers();
  }

}
