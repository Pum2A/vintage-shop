import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  beshMen = "../../assets/mezczyzna-BIALY.webp";
  blackMen = "../../assets/mezczyzna-czarny.webp";
  pinkMen = "../../assets/mezczyzna-rozowy.webp";
  whiteMen = "../../assets/mezczyzna-BIALY.webp";
  rainbowMen = "../../assets/mezczyzna-bialy-kolorowy.webp";
  pinkGirl = '../../assets/kobieta-rozowe.webp'
  blackGirl = '../../assets/kobieta-czarne.webp'
  blekitGirl = '../../assets/kobieta-blekit.webp'
  beshGirl = '../../assets/kobieta-bezowe.webp'

  

}
