import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AppSettings} from '../../app-settings';
import { Signup }           from './signup';
import { AuthenticationService } from './../../user/authentication.service';
@Injectable()
export class SignupService {
  private signupsURL = AppSettings.API_ENDPOINT + '/signups';
  constructor(private http:Http, private authenticationService: AuthenticationService) { }

  getSignups() : Observable<Signup[]> {
    return this.http.get(this.signupsURL)
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((err:any) => {
                         console.log(err);
                            let details = err.json();
                            return Observable.throw(details);
                         });
  }

  extractData(result: Response): Signup[] {
    return result.json().map(signup => {
      return {
        signup_id: signup.signup_id,
        voornaam: signup.voornaam,
        naam: signup.naam,
        email: signup.email,
        datum: signup.datum
      }
    });
  }

  editSignup(signup:Signup) : Observable<ByteString> {
    let bodyString = JSON.stringify(signup); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.put(`${this.signupsURL}/${signup['signup_id']}`, signup, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewSignup(signup: Object) : Observable<any> {
        let bodyString = JSON.stringify(signup); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.signupsURL + '/newSignup', signup, options) // ...using post request
                         .map((res:Response) => res.json()); // ...and calling .json() on the response to return data
  }

  deleteSignup(id:number) : Observable<boolean> {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.delete(this.signupsURL + "/" +id, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getSignup(id: number) : Observable<Signup> {
    return this.http.get(this.signupsURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
