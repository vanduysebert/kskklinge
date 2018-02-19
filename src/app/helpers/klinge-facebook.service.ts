import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KlingeFacebookService {

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '747699372093368',
      xfbml: true,
      version: 'v2.12'
    };

    fb.init(initParams);

  }


}
