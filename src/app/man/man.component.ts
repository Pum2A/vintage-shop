import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  beshMen = "../../assets/mezczyzna-BIALY.webp";
  blackMen = "../../assets/mezczyzna-czarny.webp";
  pinkMen = "../../assets/mezczyzna-rozowy.webp";
  whiteMen = "../../assets/mezczyzna-BIALY.webp";
  rainbowMen = "../../assets/mezczyzna-bialy-kolorowy.webp";
}
