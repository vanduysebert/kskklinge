import { Injectable } from '@angular/core';
import {Http, Response}           from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Visitor}                  from './visitor';
import {AppSettings} from './../../app-settings';
@Injectable()
export class ContactService {

  constructor(private http: Http) { }
    private wedstrijdenURL = AppSettings.API_ENDPOINT + '/wedstrijden';
  private _contactUrl = AppSettings.API_ENDPOINT + '/email';

postEmail(newMail: Visitor): Observable<string>{
  let body = `name=${newMail.firstName + ' ' + newMail.lastName}&phone=${newMail.phone}$address=${newMail.address}&email=${newMail.email}&message=${newMail.subjectMail}`;
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });

return this.http
  .post(this._contactUrl, body, options)
  .map(response => <string> response.json())
  .catch(this.handleError)

}

private handleError (error: Response) {
// in a real world app, we may send the server to some remote logging infrastructure
// instead of just logging it to the console
console.error('Error in retrieving email: ' + error);
return Observable.throw(error.json().error || 'Server error');
}

}
