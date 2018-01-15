import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AppSettings} from '../../app-settings';
import { Wedstrijd }           from './wedstrijd';
import { Ploeg }           from './../ploegen/ploeg';

@Injectable()
export class WedstrijdService {
  private wedstrijdenURL = AppSettings.API_ENDPOINT + '/wedstrijden';
  private ploegenURL = AppSettings.API_ENDPOINT + '/ploegen';
  constructor(private http:Http) { }

  getWedstrijden() : Observable<any> {
    return this.http.get(this.wedstrijdenURL)
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  extractData(result: Response): Wedstrijd[] {
    return result.json().map(wedstrijd => {
      return {
        wedstrijd_id: wedstrijd.wedstrijd_id,
        thuisSpelend: wedstrijd.thuisSpelend,
        tegenstander: wedstrijd.tegenstander,
        datum: wedstrijd.datum,
        verslag: wedstrijd.verslag,
        doelpuntenKSK: wedstrijd.doelpuntenKSK,
        doelpuntenTegenstander: wedstrijd.doelpuntenTegenstander,
        ploeg_id: wedstrijd.ploeg_id,
        ploegNaam: wedstrijd.ploegNaam
      }
    });
  }

  editWedstrijd(wedstrijd:Wedstrijd) : Observable<ByteString> {
    let bodyString = JSON.stringify(wedstrijd); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.wedstrijdenURL}/${wedstrijd['wedstrijd_id']}`, wedstrijd, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewWedstrijd(wedstrijd: Object) : Observable<string> {
        let bodyString = JSON.stringify(wedstrijd); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.wedstrijdenURL, wedstrijd, options) // ...using post request
                         .map((res:Response) => res.statusText); // ...and calling .json() on the response to return data

  }

  deleteWedstrijd(id:number) : Observable<boolean> {
    return this.http.delete(this.wedstrijdenURL + "/" +id) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getWedstrijd(id: number) : Observable<Wedstrijd> {
    return this.http.get(this.wedstrijdenURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // getPloegByWedstrijd(id: number) : Observable<Ploeg> {
  //   return this.http.get(this.ploegenURL + "/" + id)
  //                       // ...and calling .json() on the response to return data
  //                        .map(res=> res.json())
  //                        //...errors if any
  //                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  // }

}
