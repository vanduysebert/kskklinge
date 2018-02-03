import { Component, OnInit } from '@angular/core';
import {Visitor} from './visitor';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  errorSend = false;
  submitted: boolean = false;
  model: Visitor = new Visitor("", "", "", "", "", "");
  constructor(private contactService : ContactService) { }

  onSubmit() {
    this.contactService.postEmail(this.model).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
 }

 handleResponse(response){
      if(response.status =='success'){

        this.model = {firstName: '', lastName: '', email: '', phone:'', address: '', subjectMail: ''};
        this.submitted = true;
      }

      if(response.status =='error'){
        this.errorSend = true;
      }
    }
  ngOnInit() {
  }

}
