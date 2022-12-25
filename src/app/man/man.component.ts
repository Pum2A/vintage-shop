import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PRODUCTS } from '../data/products-data';
import { TopbarComponent } from '../topbar/topbar.component';
import { Directive } from '@angular/core';
import { SharedSerice } from '../shared.service';


@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {
  
  
  constructor(private sharedService:SharedSerice ) { }

  elementyKoszyka = Array()





 
  products = PRODUCTS;

  ngOnInit(): void {
  }



  clickMe(){
  this.sharedService.sendClickEvent();
  }


  beshMen = "../../assets/mezczyzna-BIALY.webp";
  blackMen = "../../assets/mezczyzna-czarny.webp";
  pinkMen = "../../assets/mezczyzna-rozowy.webp";
  whiteMen = "../../assets/mezczyzna-BIALY.webp";
  rainbowMen = "../../assets/mezczyzna-bialy-kolorowy.webp";

  
}
