import { Component, OnInit } from '@angular/core';
import {PloegenService} from './ploegen.service'
import { Ploeg }           from './ploeg';
import {Observable} from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {DeleteDialogService} from './../dialog/delete-dialog.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-ploegen',
  templateUrl: './ploegen.component.html',
  styleUrls: ['./ploegen.component.scss']
})
export class PloegenComponent implements OnInit {
  ploegen: Ploeg[];
  route:ActivatedRoute;

  constructor(location: Location, protected router: Router, activeRoute: ActivatedRoute, protected ploegService: PloegenService, protected dialogsService: DeleteDialogService, private snackBar: MatSnackBar) {
    this.route = activeRoute
  }

  deleteTeam(id: number, ploeg:string) {
    this.dialogsService
     .confirm('Verwijder ' + ploeg, 'Ben je zeker dat je ploeg ' + ploeg + ' wilt verwijderen? Dit verwijdert ook alle spelers uit die ploeg!')
     .subscribe(res => {
       if (res === "delete") {
         this.ploegService.deleteTeam(id).subscribe(res => {
           if (res == true) {
             this.snackBar.open(ploeg + " succesvol verwijderd","", {
               duration: 2000
             });
             this.loadPloegen();
         }
         });
       }
     });

  }

  edited(success: boolean) {
    if (success == true) {
      this.loadPloegen();
    }
  }

  loadPloegen() {
    this.ploegService.getPloegen().subscribe(
      ploegen => {
        this.ploegen = ploegen;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadPloegen();
  }

}
