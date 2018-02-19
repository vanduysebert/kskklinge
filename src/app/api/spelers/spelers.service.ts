import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AppSettings} from '../../app-settings';
import { Speler }           from './speler';
import { Ploeg }           from './../ploegen/ploeg';
import { AuthenticationService } from './../../user/authentication.service';

@Injectable()
export class SpelersService {
  private spelersURL = AppSettings.API_ENDPOINT + '/spelers';
  private ploegenURL = AppSettings.API_ENDPOINT + '/ploegen';
  constructor(private http:Http, private authenticationService: AuthenticationService) { }

  getSpelers() : Observable<Speler[]> {
    return this.http.get(this.spelersURL)
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((err:any) => {
                         console.log(err);
                            let details = err.json();
                            return Observable.throw(details);
                         });
  }

  extractData(result: Response): Speler[] {
    return result.json().map(speler => {
      return {
        speler_id: speler.speler_id,
        voornaam: speler.voornaam,
        naam: speler.naam,
        geboortedatum: speler.geboortedatum,
        email: speler.email,
        telefoonnummer: speler.telefoonnummer,
        adres: speler.adres,
        ingeschreven: speler.ingeschreven,
        ploeg_id: speler.ploeg_id,
        positie: speler.positie,
        doelpunten: speler.doelpunten,
        fotoUrl: speler.fotoUrl,
        ploegNaam: speler.ploegNaam
      }
    });
  }

  editPlayer(player:Speler) : Observable<ByteString> {
    let bodyString = JSON.stringify(player); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.put(`${this.spelersURL}/${player['speler_id']}`, player, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewPlayer(player: Object) : Observable<string> {
        let bodyString = JSON.stringify(player); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.spelersURL, player, options) // ...using post request
                         .map((res:Response) => res.statusText); // ...and calling .json() on the response to return data
  }

  deletePlayer(id:number) : Observable<boolean> {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.delete(this.spelersURL + "/" +id, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getPlayer(id: number) : Observable<Speler> {
    return this.http.get(this.spelersURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPloegBySpeler(id: number) : Observable<Ploeg> {
    return this.http.get(this.ploegenURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBirthdayPlayers(): Observable<Speler[]> {
    return this.http.get(this.spelersURL+ "/birthday")
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((err:any) => {
                         console.log(err);
                            let details = err.json();
                            return Observable.throw(details);
                         });
  }

}
