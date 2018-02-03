import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {SpelersService} from './spelers.service'
import { Speler }           from './speler';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {DeleteDialogService} from './../dialog/delete-dialog.service';
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
  displayedColumns = ['naam', 'geboortedatum', 'email', 'tel', 'ploegnaam', 'ingeschreven', 'edit', 'del'];
  spelers = new MatTableDataSource<Speler>([]);
  route: ActivatedRoute;

  constructor(location: Location,protected activeRoute: ActivatedRoute, protected spelersService: SpelersService, protected dialogsService: DeleteDialogService, protected snackBar: MatSnackBar) {
    this.route = activeRoute;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.spelers.filter = filterValue;
  }

  deletePlayer(id: number, speler:string, spelerVoornaam: string) {
    this.dialogsService
     .confirm('Verwijder ' + spelerVoornaam + ' ' +  speler , 'Ben je zeker dat je ' + speler + ' ' + spelerVoornaam + ' wilt verwijderen?')
     .subscribe(res => {
       if (res === "delete") {
         this.spelersService.deletePlayer(id).subscribe(res => {
           if (res == true) {
             this.snackBar.open(spelerVoornaam + " " + speler + " succesvol verwijderd","", {
               duration: 2000
             });
             this.loadPlayers();
         }
         });
       }
     });

  }

  edited(success: boolean) {
    if (success == true) {
      this.loadPlayers();
    }
  }

  loadPlayers() {
    this.spelersService.getSpelers().subscribe(
      spelers => {
        this.spelers= new MatTableDataSource(spelers);
        this.spelers.sort = this.sort;
        this.spelers.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadPlayers();
  }

  ngAfterViewInit() {
    if(this.spelers) {

      this.spelers.sort = this.sort;
      this.spelers.paginator = this.paginator;
    }

  }

}
