import { Component, OnInit, ViewChild } from '@angular/core';
import {WedstrijdService} from './wedstrijd.service'
import { Wedstrijd }           from './wedstrijd';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

import { Location } from '@angular/common';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-wedstrijden',
  templateUrl: './wedstrijden.component.html',
  styleUrls: ['./wedstrijden.component.scss']
})
export class WedstrijdenComponent implements OnInit {
  // @Output() updateRoute = new EventEmitter<string>();
  displayedColumns = ['datum', 'thuisploeg', 'uitploeg', 'uitslag', 'edit', 'del'];
  wedstrijden = new MatTableDataSource<Wedstrijd>([]);
  route: ActivatedRoute;

  constructor(location: Location, protected router: Router, activeRoute: ActivatedRoute, protected wedstrijdService: WedstrijdService) {
    this.route = activeRoute;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.wedstrijden.filter = filterValue;
  }

  deleteWedstrijd(id: number, ploegNaam:string, tegenstander: string) {


  }

  loadWedstrijden() {
    this.wedstrijdService.getWedstrijden().subscribe(
      wedstrijden => {
        this.wedstrijden = new MatTableDataSource(wedstrijden);
        this.wedstrijden.sort = this.sort;
        this.wedstrijden.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadWedstrijden();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    if(this.wedstrijden) {

      this.wedstrijden.sort = this.sort;
      this.wedstrijden.paginator = this.paginator;
    }

  }

}
