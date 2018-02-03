import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-jeugd',
  templateUrl: './jeugd.component.html',
  styleUrls: ['./jeugd.component.scss']
})
export class JeugdComponent implements OnInit {
  route: ActivatedRoute;
  constructor(private r: ActivatedRoute) {
    this.route = r;
  }

  ngOnInit() {
  }

}
