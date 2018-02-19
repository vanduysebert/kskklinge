import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {SignupService} from './signup.service'
import { Signup }           from './signup';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {DeleteDialogService} from './../dialog/delete-dialog.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.scss']
})
export class SignupsComponent implements OnInit {

  displayedColumns = ['naam', 'email', 'datum', 'del'];
  signups = new MatTableDataSource<Signup>([]);
  route: ActivatedRoute;

  constructor(location: Location,protected activeRoute: ActivatedRoute, protected signupsService: SignupService, protected dialogsService: DeleteDialogService, protected snackBar: MatSnackBar) {
    this.route = activeRoute;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.signups.filter = filterValue;
  }

  deleteSignup(id: number, signup:string, signupVoornaam: string) {
    this.dialogsService
     .confirm('Verwijder ' + signupVoornaam + ' ' +  signup , 'Ben je zeker dat je ' + signup + ' ' + signupVoornaam + ' wilt verwijderen?')
     .subscribe(res => {
       if (res === "delete") {
         this.signupsService.deleteSignup(id).subscribe(res => {
           if (res == true) {
             this.snackBar.open(signupVoornaam + " " + signup + " succesvol verwijderd","", {
               duration: 2000
             });
             this.loadSignups();
         }
         });
       }
     });

  }

  edited(success: boolean) {
    if (success == true) {
      this.loadSignups();
    }
  }

  loadSignups() {
    this.signupsService.getSignups().subscribe(
      signups => {
        this.signups= new MatTableDataSource(signups);
        this.signups.sort = this.sort;
        this.signups.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadSignups();
  }

  ngAfterViewInit() {
    if(this.signups) {

      this.signups.sort = this.sort;
      this.signups.paginator = this.paginator;
    }

  }

}
