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

postEmail(newMail: Object): Observable<string>{
  let bodyString = JSON.stringify(newMail);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });

return this.http
  .post(this._contactUrl, bodyString, options)
  .map(response => <string> response.json())
  .catch(this.handleError)

}

private htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

}

private handleError (error: Response) {
// in a real world app, we may send the server to some remote logging infrastructure
// instead of just logging it to the console
console.error('Error in retrieving email: ' + error);
return Observable.throw(error.json().error || 'Server error');
}

}
