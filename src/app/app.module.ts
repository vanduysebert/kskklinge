// Modules
  //--Angular
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


  //--App modules
    import { AppRoutingModule } from './app-routing.module';
  //--3rd Party modules
    import {CdkTableModule} from '@angular/cdk/table';
    //import {Ng2UploaderModule} from 'ng2-uploader';
    import { FileUploadModule } from 'ng2-file-upload';
    import {ImageUploadModule} from 'ng2-imageupload';
    import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
    import {ToastModule} from 'ng2-toastr/ng2-toastr';
    import { SidebarModule } from 'ng-sidebar';
    import { NgxDatatableModule } from '@swimlane/ngx-datatable';

    import {MatTableModule} from '@angular/material/table';
    import {MatSortModule} from '@angular/material/sort';
    import {MatPaginatorModule} from '@angular/material/paginator';
    import {MatDialogModule} from '@angular/material/dialog';
    import {MatSnackBarModule} from '@angular/material/snack-bar';
    import {MatSidenavModule} from '@angular/material/sidenav';
    import { MomentModule } from 'angular2-moment';
    import { AgmCoreModule } from '@agm/core';

    //ng-bootstrap
    import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
    import { PaginationModule } from 'ngx-bootstrap/pagination';
    import { ModalModule } from 'ngx-bootstrap/modal';
    import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
    import { TimepickerModule } from 'ngx-bootstrap/timepicker';
    import { AccordionModule } from 'ngx-bootstrap/accordion';
    import { CollapseModule } from 'ngx-bootstrap/collapse';
    import { CarouselModule } from 'ngx-bootstrap/carousel';
    import { TooltipModule } from 'ngx-bootstrap/tooltip';
    import {Ng2PageScrollModule} from 'ng2-page-scroll';
    import { DeviceDetectorModule } from 'ngx-device-detector';
    import { FacebookModule } from 'ngx-facebook';

//Classes
import {AppSettings} from './app-settings';

//Components
  //--Website
    import { AppComponent } from './app.component';
    import {DeleteDialog} from './api/dialog/delete/delete-dialog.component';
    import { HomeComponent } from './home/home.component';
    import { SeniorenComponent } from './senioren/senioren.component';
      import { AploegComponent } from './senioren/aploeg/aploeg.component';
      import { ZondagsreservenComponent } from './senioren/zondagsreserven/zondagsreserven.component';
    import { JeugdComponent } from './jeugd/jeugd.component';
      import { U6Component } from './jeugd/u6/u6.component';
      import { U7Component } from './jeugd/u7/u7.component';
      import { U8Component } from './jeugd/u8/u8.component';
      import { U9Component } from './jeugd/u9/u9.component';
      import { U11Component } from './jeugd/u11/u11.component';
      import { U15Component } from './jeugd/u15/u15.component';
      import { U17Component } from './jeugd/u17/u17.component';
    import { EvenementenComponent } from './evenementen/evenementen.component';
    import { ClubComponent } from './club/club.component';
      import { BestuurComponent } from './club/bestuur/bestuur.component';
      import { InfoComponent } from './club/info/info.component';
      import { ContactComponent } from './club/contact/contact.component';
      import { LiggingComponent } from './club/ligging/ligging.component';
      import { DocumentenComponent } from './club/documenten/documenten.component';
      import { LinksComponent } from './club/links/links.component';
    import { SponsorsComponent } from './sponsors/sponsors.component';
//Components
  //--API
    import { ApiComponent } from './api/api.component';
    import { PloegenComponent } from './api/ploegen/ploegen.component';
      import { PloegDetailComponent } from './api/ploegen/ploeg-detail/ploeg-detail.component';
      import { PloegNieuwComponent } from './api/ploegen/ploeg-nieuw/ploeg-nieuw.component';
      import { EditPloegComponent } from './api/ploegen/edit-ploeg/edit-ploeg.component';
    import { SpelersComponent } from './api/spelers/spelers.component';
      import { SpelerDetailComponent } from './api/spelers/speler-detail/speler-detail.component';
      import { SpelerNieuwComponent } from './api/spelers/speler-nieuw/speler-nieuw.component';
      import { EditSpelerComponent } from './api/spelers/edit-speler/edit-speler.component';
    import { EventsComponent } from './api/events/events.component';
      import { EventNieuwComponent } from './api/events/event-nieuw/event-nieuw.component';
      import { EventDetailComponent } from './api/events/event-detail/event-detail.component';
      import { EditEventComponent } from './api/events/edit-event/edit-event.component';
    import { NieuwsComponent } from './api/nieuws/nieuws.component';
      import { EditNieuwsComponent } from './api/nieuws/edit-nieuws/edit-nieuws.component';
      import { NieuwsNieuwComponent } from './api/nieuws/nieuws-nieuw/nieuws-nieuw.component';
      import { NieuwsDetailComponent } from './api/nieuws/nieuws-detail/nieuws-detail.component';
    import { WedstrijdenComponent } from './api/wedstrijden/wedstrijden.component';
      import { WedstrijdNieuwComponent } from './api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component';
      import { WedstrijdDetailComponent } from './api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component';
      import { EditWedstrijdComponent } from './api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component';
    import { SponsorComponent } from './api/sponsor/sponsor.component';
      import { EditSponsorComponent } from './api/sponsor/edit-sponsor/edit-sponsor.component';
      import { NewSponsorComponent } from './api/sponsor/new-sponsor/new-sponsor.component';
      import { SponsorDetailComponent } from './api/sponsor/sponsor-detail/sponsor-detail.component';
//Help-components

//Services
  //--App
    //--API
      import {PloegenService} from './api/ploegen/ploegen.service';
      import {SpelersService} from './api/spelers/spelers.service';
      import {WedstrijdService} from './api/wedstrijden/wedstrijd.service';
      import {NieuwsService} from './api/nieuws/nieuws.service';
      import {DeleteDialogService} from './api/dialog/delete-dialog.service';
      import {ContactService} from './club/contact/contact.service';
      import {SponsorService} from './api/sponsor/sponsor.service';
      import {AuthenticationService} from './user/authentication.service';
      import {AuthGuard} from './guards/auth.guard';
      import {SignupService} from './api/signups/signup.service';
      import {KlingeFacebookService} from './helpers/klinge-facebook.service';

    //--Website


  //Other services
import { BooleanCheckPipe } from './boolean-check.pipe';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { nl } from 'ngx-bootstrap/locale';
import { U13Component } from './jeugd/u13/u13.component';
import { PlayerDetailComponent } from './helpers/player-detail/player-detail.component';
import { JeugdNieuwsComponent } from './jeugd/jeugd-nieuws/jeugd-nieuws.component';
import { ClubNieuwsComponent } from './club/club-nieuws/club-nieuws.component';
import { SupportersComponent } from './supporters/supporters.component';
import { SignupsComponent } from './api/signups/signups.component';

defineLocale('nl', nl);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeniorenComponent,
      AploegComponent,
      ZondagsreservenComponent,
    JeugdComponent,
      U6Component,
      U7Component,
      U8Component,
      U9Component,
      U11Component,
      U15Component,
      U17Component,
    EvenementenComponent,
    ClubComponent,
      BestuurComponent,
      InfoComponent,
      ContactComponent,
      LiggingComponent,
      DocumentenComponent,
      LinksComponent,
    SponsorsComponent,
    ApiComponent,
      PloegenComponent,
        PloegDetailComponent,
        PloegNieuwComponent,
        EditPloegComponent,
      SpelersComponent,
        EditSpelerComponent,
        SpelerDetailComponent,
        SpelerNieuwComponent,
      EventsComponent,
        EventNieuwComponent,
        EventDetailComponent,
        EditEventComponent,
      NieuwsComponent,
        EditNieuwsComponent,
        NieuwsNieuwComponent,
        NieuwsDetailComponent,
      WedstrijdenComponent,
        WedstrijdNieuwComponent,
        WedstrijdDetailComponent,
        EditWedstrijdComponent,
      SponsorComponent,
        EditSponsorComponent,
        NewSponsorComponent,
        SponsorDetailComponent,
    BooleanCheckPipe,
    DeleteDialog,
    U13Component,
    PlayerDetailComponent,
    JeugdNieuwsComponent,
    ClubNieuwsComponent,
    SupportersComponent,
    SignupsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FileUploadModule,
    ImageUploadModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ToastModule.forRoot(),
    SidebarModule.forRoot(),
    //ng-bootstrap
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TimepickerModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    FacebookModule.forRoot(),
    MomentModule,
    NgxDatatableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSidenavModule,
    MatSnackBarModule,
    Ng2PageScrollModule,
    DeviceDetectorModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo9M4SgCZAN7yurg-3KZvs6MMC_YIbMp0'
    })
  ],
  exports: [
    DeleteDialog,
    PlayerDetailComponent
  ],
  providers: [
    PloegenService,
    SpelersService,
    WedstrijdService,
    NieuwsService,
    AppSettings,
    DeleteDialogService,
    ContactService,
    SponsorService,
    SignupService,
      KlingeFacebookService,
     AuthenticationService,
     AuthGuard
  ],
  entryComponents: [
    DeleteDialog,
    PlayerDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
