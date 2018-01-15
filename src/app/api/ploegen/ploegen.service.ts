import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Ploeg }           from './ploeg';
import { Speler }           from './../spelers/speler';
import {AppSettings} from '../../app-settings';

@Injectable()
export class PloegenService {
  private ploegenURL = AppSettings.API_ENDPOINT + '/ploegen';
  constructor(private http:Http) { }

  getPloegen() : Observable<Ploeg[]> {
    return this.http.get(this.ploegenURL)
                        // ...and calling .json() on the response to return data
                         .map(this.extractData)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  extractData(result: Response): Ploeg[] {
    return result.json().map(issue => {
      return {
        ploeg_id: issue.ploeg_id,
        naam: issue.naam,
        leeftijdMax: issue.leeftijdMax,
        trainer_1: issue.trainer_1,
        trainer_2: issue.trainer_2,
        telTrainer_1: issue.telTrainer_1,
        telTrainer_2: issue.telTrainer_2,
        trainingsuur: issue.trainingsuur,
        trainingsdagen: issue.trainingsdagen,
        fotoUrl: issue.fotoUrl
      }
    });
  }

  editTeam(team:Ploeg) : Observable<ByteString> {
    let bodyString = JSON.stringify(team); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.ploegenURL}/${team['ploeg_id']}`, team, options) // ...using put request
                         .map((res:Response) => res.statusText) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addNewTeam(team: Object) : Observable<string> {
        let bodyString = JSON.stringify(team); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.ploegenURL, team, options) // ...using post request
                         .map((res:Response) => res.statusText); // ...and calling .json() on the response to return data

  }

  deleteTeam(id:number) : Observable<boolean> {
    return this.http.delete(this.ploegenURL + "/" +id) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getPloeg(id: number) : Observable<Ploeg> {
    return this.http.get(this.ploegenURL + "/" + id)
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSpelersByTeam(ploegId: number) : Observable<Speler[]> {
    return this.http.get(this.ploegenURL + "/" + ploegId + "/spelers")
                        // ...and calling .json() on the response to return data
                         .map(res=> res.json())
                         //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
