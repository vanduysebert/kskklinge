import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeniorenComponent } from './senioren/senioren.component';
import { AploegComponent } from './senioren/aploeg/aploeg.component';
import { ReservenComponent } from './senioren/reserven/reserven.component';
import { ZondagsreservenComponent } from './senioren/zondagsreserven/zondagsreserven.component';

import { JeugdComponent } from './jeugd/jeugd.component';
import { U6Component } from './jeugd/u6/u6.component';
import { U7Component } from './jeugd/u7/u7.component';
import { U8Component } from './jeugd/u8/u8.component';
import { U9Component } from './jeugd/u9/u9.component';
import { U10Component } from './jeugd/u10/u10.component';
import { U11Component } from './jeugd/u11/u11.component';
import { U15Component } from './jeugd/u15/u15.component';
import { U17Component } from './jeugd/u17/u17.component';


import { ClubComponent } from './club/club.component';
import { BestuurComponent } from './club/bestuur/bestuur.component';
import { ContactComponent } from './club/contact/contact.component';
import { DocumentenComponent } from './club/documenten/documenten.component';
import { InfoComponent } from './club/info/info.component';
import { LiggingComponent } from './club/ligging/ligging.component';
import { LinksComponent } from './club/links/links.component';


import { EvenementenComponent } from './evenementen/evenementen.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

import {ApiComponent} from './api/api.component';
import {PloegenComponent} from './api/ploegen/ploegen.component';
import {PloegDetailComponent} from './api/ploegen/ploeg-detail/ploeg-detail.component';
import {PloegNieuwComponent} from './api/ploegen/ploeg-nieuw/ploeg-nieuw.component';
import {EditPloegComponent} from './api/ploegen/edit-ploeg/edit-ploeg.component';

import {SpelersComponent} from './api/spelers/spelers.component';
import {SpelerDetailComponent} from './api/spelers/speler-detail/speler-detail.component';
import {SpelerNieuwComponent} from './api/spelers/speler-nieuw/speler-nieuw.component';
import {EditSpelerComponent} from './api/spelers/edit-speler/edit-speler.component';

import {NieuwsComponent} from './api/nieuws/nieuws.component';
import {NieuwsDetailComponent} from './api/nieuws/nieuws-detail/nieuws-detail.component';
import {NieuwsNieuwComponent} from './api/nieuws/nieuws-nieuw/nieuws-nieuw.component';
import {EditNieuwsComponent} from './api/nieuws/edit-nieuws/edit-nieuws.component';

import {WedstrijdenComponent} from './api/wedstrijden/wedstrijden.component';
import {WedstrijdDetailComponent} from './api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component';
import {WedstrijdNieuwComponent} from './api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component';
import {EditWedstrijdComponent} from './api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component';
const routes: Routes = [
  {
    path: 'api',
    component: ApiComponent,
    children: [
      {
        path: 'ploegen',
        component: PloegenComponent,
        children: [
          {
            path: 'ploeg-detail/:id',
            component: PloegDetailComponent,
          },
          {
            path: 'ploeg-edit/:id',
            component: EditPloegComponent
          },
          {
            path: 'ploeg-nieuw',
            component: PloegNieuwComponent
          },
        ],

      },
      {
        path: 'spelers',
        component: SpelersComponent,
        children: [
          {
            path: 'speler-detail/:id',
            component: SpelerDetailComponent
          },
          {
            path: 'speler-edit/:id',
            component: EditSpelerComponent
          },
          {
            path: 'speler-nieuw',
            component: SpelerNieuwComponent
          },
        ],
      },
      {
        path: 'nieuws',
        component: NieuwsComponent,
        children: [
          {
            path: 'nieuws-detail/:id',
            component: NieuwsDetailComponent
          },
          {
            path: 'nieuws-edit/:id',
            component: EditNieuwsComponent
          },
          {
            path: 'nieuws-nieuw',
            component: NieuwsNieuwComponent
          },
        ],
      },
      {
        path: 'wedstrijden',
        component: WedstrijdenComponent,
        children: [
          {
            path: 'wedstrijd-detail/:id',
            component: WedstrijdDetailComponent
          },
          {
            path: 'wedstrijd-edit/:id',
            component: EditWedstrijdComponent
          },
          {
            path: 'wedstrijd-nieuw',
            component: WedstrijdNieuwComponent
          },
        ],

      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'senioren',
    component: SeniorenComponent,
    children: [
      {
        path: 'aploeg',
        component: AploegComponent,
      },
      {
        path: 'reserven',
        component: ReservenComponent
      },
      {
        path: 'zondagsreserven',
        component: ZondagsreservenComponent
      }
    ]
  },
  {
    path: 'jeugd',
    component: JeugdComponent,
    children: [
      {
        path: 'u6',
        component: U6Component,
      },
      {
        path: 'u7',
        component: U7Component
      },
      {
        path: 'u8',
        component: U8Component
      },
      {
        path: 'u9',
        component: U9Component,
      },
      {
        path: 'u10',
        component: U10Component
      },
      {
        path: 'u11',
        component: U11Component
      },
      {
        path: 'u15',
        component: U15Component
      },
      {
        path: 'u17',
        component: U17Component
      }
    ]
  },
  {
    path: 'club',
    component: ClubComponent,
    children: [
      {
        path: 'bestuur',
        component: BestuurComponent,
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'documenten',
        component: DocumentenComponent
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'ligging',
        component: LiggingComponent
      },
      {
        path: 'links',
        component: LinksComponent
      }
    ]
  },
  {
    path: 'evenementen',
    component: EvenementenComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
