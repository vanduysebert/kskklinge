import { Component, OnInit, TemplateRef } from '@angular/core';
import {Signup} from './../api/signups/signup';
import {SignupService} from './../api/signups/signup.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MatSnackBar} from '@angular/material';

import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.scss']
})
export class SupportersComponent implements OnInit {
  modalRef: BsModalRef;
  subscriber: Signup = new Signup(0, "", "", "", "");
  constructor(private fb:FacebookService, private snackBar: MatSnackBar,private signupService: SignupService, private modalService: BsModalService) {

    fb.init({
      appId: '747699372093368',
      xfbml: true,
      version: 'v2.12'
    });
   }

  addToNewsletter(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    let sign = this.subscriber;
    this.signupService.addNewSignup(this.subscriber).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
        this.snackBar.open("Bedankt "  + sign.voornaam + ", om u aan te melden voor de nieuwsbrief. U ontvangt vanaf nu alle laatste nieuwtjes via mail!","", {
          duration: 3000,
          panelClass: ['bg-primary', 'text-white', 'p4', 'bigText']
        });
        this.subscriber = new Signup(0, "", "", "", "");
      } else if (res.status == "error" && res.errorCode == 1) {
        this.snackBar.open("Er heeft zich een probleem voorgedaan. Probeer het opnieuw of contacteer ons als het probleem blijft!","", {
          duration: 4000,
          panelClass: ['bg-danger', 'text-white', 'p4', 'bigText']
        });
         this.subscriber = new Signup(0, "", "", "", "");
      } else if (res.status == "error" && res.errorCode == 2 ) {
        this.snackBar.open(sign.email + " is reeds aangemeld voor de nieuwsbrief!","", {
          duration: 3000,
          panelClass: ['bg-warning', 'text-primary', 'p4', 'bigText']
        });
         this.subscriber = new Signup(0, "", "", "", "");
      }
    });
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
