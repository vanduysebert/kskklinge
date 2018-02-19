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
import {Sponsor} from './../../api/sponsor/sponsor';
import {SponsorService} from './../../api/sponsor/sponsor.service';
@Component({
  selector: 'app-aploeg',
  templateUrl: './aploeg.component.html',
  styleUrls: ['./aploeg.component.scss']
})
export class AploegComponent implements OnInit {
  ploeg: Ploeg;
  spelers: Speler[] = [];
  games: Wedstrijd[] = [];
  game: Wedstrijd;
  route: ActivatedRoute;
  bsModalRef: BsModalRef;
  sponsor: Sponsor;
  constructor(private ploegSvc: PloegenService, private gameSvc: WedstrijdService, private r: ActivatedRoute, private modalService: BsModalService, private sponsorSvc: SponsorService) {
    this.route = r;
  }

  hoverBg(status: boolean, even: boolean) {
      if (status) {
        if (even) {
          return 'bg-ksk';
        } else {
          return 'bg-accent';
        }
      } else {
        if (even) {
          return 'bg-accent';
        } else {
          return 'bg-ksk';
        }
      }
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
        if(this.ploeg) {
          this.ploegSvc.getSpelersByTeam(this.ploeg.ploeg_id).subscribe(players =>  {
            this.spelers = players;
          });
          this.ploegSvc.getGamesByTeam(this.ploeg.ploeg_id).subscribe(wedstrijden => {
            this.games = wedstrijden;
            let l = this.games.length;
            if (l > 0) {
              this.game = this.games[0];
            }
          });
          this.sponsorSvc.getSponsor(this.ploeg.sponsor_id).subscribe(sponsor => {
            this.sponsor = sponsor;
          });
        }

    });
  }


  ngOnInit() {
    this.loadPloeg("Senioren");

  }

}
