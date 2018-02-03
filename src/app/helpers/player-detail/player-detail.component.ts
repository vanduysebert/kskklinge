import { Component, OnInit } from '@angular/core';
import {Speler} from './../../api/spelers/speler';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  player: Speler;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

}
