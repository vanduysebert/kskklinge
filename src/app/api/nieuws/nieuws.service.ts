import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AppSettings} from '../../app-settings';
import { Nieuws }           from './nieuws';

@Injectable()
export class NieuwsService {

  private nieuwsURL = AppSettings.API_ENDPOINT + '/nieuws';
  constructor(private http:Http) { }

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
        datum: nieuws.datum
      }
    });
  }

  editNieuws(nieuws:Nieuws) : Observable<ByteString> {
    let bodyString = JSON.stringify(nieuws); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.nieuwsURL}/${nieuws['nieuws_id']}`, nieuws, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewNieuws(nieuws: Object) : Observable<string> {
        let bodyString = JSON.stringify(nieuws); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.nieuwsURL, nieuws, options) // ...using post request
                         .map((res:Response) => res.statusText); // ...and calling .json() on the response to return data

  }

  deleteNieuws(id:number) : Observable<boolean> {
    return this.http.delete(this.nieuwsURL + "/" +id) // ...using put request
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

}
