import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligging',
  templateUrl: './ligging.component.html',
  styleUrls: ['./ligging.component.scss']
})
export class LiggingComponent implements OnInit {
  lat: number = 51.252318;
  lng: number = 4.077796;
  constructor() { }

  ngOnInit() {
  }

}
