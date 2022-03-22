import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donde-estamos',
  templateUrl: './donde-estamos.component.html',
  styleUrls: ['./donde-estamos.component.css']
})
export class DondeEstamosComponent implements OnInit {

  latitud: number;
  longitud: number
  constructor() {
    this.latitud = 40.416735626208386
    this.longitud = -3.671758360011675

  }

  ngOnInit(): void {
  }

}
