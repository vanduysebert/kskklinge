import { Component, OnInit, ViewChild } from '@angular/core';
import {NieuwsService} from './nieuws.service'
import { Nieuws }           from './nieuws';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.scss']
})
export class NieuwsComponent implements OnInit {

  displayedColumns = ['datum', 'titel', 'edit', 'del'];


  nieuws = new MatTableDataSource<Nieuws>([]);
  public route: ActivatedRoute;
  isRootRoute: boolean = false;
  public changed: boolean;

  constructor(activeRoute: ActivatedRoute, protected nieuwsService: NieuwsService) {
    this.route = activeRoute;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.nieuws.filter = filterValue;
  }

  deleteNieuws(id: number, titel:string) {

  }

  loadNieuws() {
    this.nieuwsService.getNieuwsAll().subscribe(
      nieuws => {
        if (nieuws) {
        this.nieuws = new MatTableDataSource(nieuws);
          this.nieuws.sort = this.sort;
          this.nieuws.paginator = this.paginator;
        }

      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadNieuws();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    if(this.nieuws) {

      this.nieuws.sort = this.sort;
      this.nieuws.paginator = this.paginator;
    }

  }

}
