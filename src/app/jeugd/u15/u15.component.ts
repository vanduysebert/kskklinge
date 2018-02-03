import { Component, OnInit } from '@angular/core';
import {PloegenService} from './../../api/ploegen/ploegen.service';
import {Ploeg} from './../../api/ploegen/ploeg';
import {Speler} from './../../api/spelers/speler';
import {Wedstrijd} from './../../api/wedstrijden/wedstrijd';
import {WedstrijdService} from './../../api/wedstrijden/wedstrijd.service';
import {ActivatedRoute} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PlayerDetailComponent} from './../../helpers/player-detail/player-detail.component';

@Component({
  selector: 'app-u15',
  templateUrl: './u15.component.html',
  styleUrls: ['./u15.component.scss']
})
export class U15Component implements OnInit {

    ploeg: Ploeg;
    spelers: Speler[] = [];
    games: Wedstrijd[] = [];
    game: Wedstrijd;
    route: ActivatedRoute;
    bsModalRef: BsModalRef;
    teamName: string;
    constructor(private ploegSvc: PloegenService, private gameSvc: WedstrijdService, private r: ActivatedRoute, private modalService: BsModalService) {
      this.route = r;
    }

    showPlayerDetail(sp: Speler) {
      const initialState = {
        player: sp
      };
      this.bsModalRef = this.modalService.show(PlayerDetailComponent, {initialState});
      this.bsModalRef.content.closeBtnName = 'Close';
      this.bsModalRef.content.player = sp;
    }

    viewMatchReport(wedstrijd: Wedstrijd) {
      this.game = wedstrijd;
      this.route.fragment
        .subscribe(fragment => {
          if (fragment) {
            let element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView();
            }
          }
        });
    }

    isEven(n) {
      return n % 2 == 0;
    }

    loadPloeg(naam:string) {
      this.ploegSvc.loadPloegByName(naam).subscribe(team => {
          this.ploeg = team;
          if(this.ploeg.trainingsuur) {
            this.ploeg.trainingsuur = this.ploeg.trainingsuur.substr(0,5);
          }
          if(this.ploeg) {
            this.ploegSvc.getSpelersByTeam(this.ploeg.ploeg_id).subscribe(players =>  {
              this.spelers = players;
            });
            this.ploegSvc.getGamesByTeam(this.ploeg.ploeg_id).subscribe(wedstrijden => {
              this.games = wedstrijden;
            })
          }

      });
    }


    ngOnInit() {
      this.teamName = "U15";
      this.loadPloeg(this.teamName);

    }

}
