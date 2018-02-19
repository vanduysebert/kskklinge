import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app-settings';
import { Sponsor } from './sponsor';
import { Ploeg } from './../ploegen/ploeg';
import { AuthenticationService } from './../../user/authentication.service';

@Injectable()
export class SponsorService {
  private sponsorURL = AppSettings.API_ENDPOINT + '/sponsors';
  private ploegenURL = AppSettings.API_ENDPOINT + '/ploegen';
  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get(this.sponsorURL)
      // ...and calling .json() on the response to return data
      .map(this.extractData)
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMainSponsors(): Observable<Sponsor[]> {
    return this.http.get(this.sponsorURL + "/main")
      // ...and calling .json() on the response to return data
      .map(this.extractData)
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  extractData(result: Response): Sponsor[] {
    return result.json().map(sponsor => {
      return {
        sponsor_id: sponsor.sponsor_id,
        naam: sponsor.naam,
        website: sponsor.website,
        email: sponsor.email,
        telnr: sponsor.telnr,
        adres: sponsor.adres,
        fotoUrl: sponsor.fotoUrl,
        slogan: sponsor.slogan
      }
    });
  }

  editSponsor(player: Sponsor): Observable<ByteString> {
    let bodyString = JSON.stringify(player); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.sponsorURL}/${player['sponsor_id']}`, player, options) // ...using put request
      .map((res: Response) => res.statusText) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewSponsor(player: Object): Observable<string> {
    let bodyString = JSON.stringify(player); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.sponsorURL, player, options) // ...using post request
      .map((res: Response) => res.statusText); // ...and calling .json() on the response to return data

  }

  deleteSponsor(id: number): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.delete(this.sponsorURL + "/" + id, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getSponsor(id: number): Observable<Sponsor> {
    return this.http.get(this.sponsorURL + "/" + id)
      // ...and calling .json() on the response to return data
      .map(res => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPloegBySponsor(id: number): Observable<Ploeg> {
    return this.http.get(this.ploegenURL + "/" + id)
      // ...and calling .json() on the response to return data
      .map(res => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
