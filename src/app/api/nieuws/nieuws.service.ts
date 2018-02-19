import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AppSettings} from '../../app-settings';
import { Nieuws }           from './nieuws';
import { AuthenticationService } from './../../user/authentication.service';
import { User } from './../../user/user';

@Injectable()
export class NieuwsService {

  private nieuwsURL = AppSettings.API_ENDPOINT + '/nieuws';
  private eventsURL = AppSettings.API_ENDPOINT + '/events';
  constructor(private http:Http, private authenticationService: AuthenticationService) { }

  getNieuwsAll() : Observable<any> {

    return this.http.get(this.nieuwsURL)
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  extractData(result: Response): Nieuws[] {
    return result.json().map(nieuws => {
      return {
        nieuws_id: nieuws.nieuws_id,
        titel: nieuws.titel,
        inhoud: nieuws.inhoud,
        datum: nieuws.datum,
        newsType: nieuws.newsType,
        eventDate: nieuws.eventDate
      }
    });
  }

  editNieuws(nieuws:Nieuws) : Observable<ByteString> {
    let bodyString = JSON.stringify(nieuws); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        console.log(options);
        return this.http.put(`${this.nieuwsURL}/${nieuws['nieuws_id']}`, nieuws, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewNieuws(nieuws: Object) : Observable<string> {
        let bodyString = JSON.stringify(nieuws); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.nieuwsURL, nieuws, options) // ...using post request
                         .map((res:Response) => res.statusText); // ...and calling .json() on the response to return data

  }

  deleteNieuws(id:number) : Observable<boolean> {
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.delete(this.nieuwsURL + "/" +id, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getNieuws(id: number) : Observable<Nieuws> {
    return this.http.get(this.nieuwsURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUpcomingEvents() : Observable<any> {
    return this.http.get(this.eventsURL + "/upcoming")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUpcomingEventsAll() : Observable<any> {
    return this.http.get(this.eventsURL + "/upcomingAll")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPastEvents() : Observable<any> {
    return this.http.get(this.eventsURL + "/pastLastYear")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getLatestNews() : Observable<any> {
    return this.http.get(this.nieuwsURL + "/latest")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getNewsYouth() : Observable<any> {
    return this.http.get(this.nieuwsURL + "/jeugd")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getNewsClub() : Observable<any> {
    return this.http.get(this.nieuwsURL + "/club")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
