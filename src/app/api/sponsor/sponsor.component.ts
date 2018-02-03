import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {SponsorService} from './sponsor.service'
import { Sponsor }           from './sponsor';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {DeleteDialogService} from './../dialog/delete-dialog.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  displayedColumns = ['naam', 'website', 'email', 'tel', 'edit', 'del'];
  sponsors = new MatTableDataSource<Sponsor>([]);
  route: ActivatedRoute;

  constructor(location: Location,protected activeRoute: ActivatedRoute, protected sponsorsService: SponsorService, protected dialogsService: DeleteDialogService, protected snackBar: MatSnackBar) {
    this.route = activeRoute;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.sponsors.filter = filterValue;
  }

  deleteSponsor(id: number, naam:string) {
    this.dialogsService
     .confirm('Verwijder ' + naam , 'Ben je zeker dat je ' + naam + ' wilt verwijderen?')
     .subscribe(res => {
       if (res === "delete") {
         this.sponsorsService.deleteSponsor(id).subscribe(res => {
           if (res == true) {
             this.snackBar.open(naam + " succesvol verwijderd","", {
               duration: 2000
             });
             this.loadSponsors();
         }
         });
       }
     });

  }

  edited(success: boolean) {
    if (success == true) {
      this.loadSponsors();
    }
  }

  loadSponsors() {
    this.sponsorsService.getSponsors().subscribe(
      sponsors => {
        this.sponsors= new MatTableDataSource(sponsors);
        this.sponsors.sort = this.sort;
        this.sponsors.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadSponsors();
  }

  ngAfterViewInit() {
    if(this.sponsors) {

      this.sponsors.sort = this.sort;
      this.sponsors.paginator = this.paginator;
    }

  }


}
