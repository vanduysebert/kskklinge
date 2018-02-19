import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from './../user/authentication.service';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

    authSvc: AuthenticationService;
    constructor(private router: Router, private authService: AuthenticationService, private snackBar: MatSnackBar) {
      this.authSvc = authService;
     }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true

            if (this.authService.tokenIsNotExpired()) {
              return true;
            } else {
              this.snackBar.open("Uw login is verlopen. Log opnieuw in","", {
                duration: 8000,
                panelClass: ["bg-danger", "text-white",  "p-5"]
              });
              this.authService.logout();
              this.router.navigate(['/api']);
              return false;
            }

        }

        // not logged in so redirect to login page
        this.router.navigate(['/api']);
        return false;
    }
}
