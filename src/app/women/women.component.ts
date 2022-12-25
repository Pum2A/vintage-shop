import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from '../app.component';
import { SharedSerice } from '../shared.service';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  
  constructor( private sharedService:SharedSerice ) { }
  pinkGirl = '../../assets/kobieta-rozowe.webp'
  blackGirl = '../../assets/kobieta-czarne.webp'
  blekitGirl = '../../assets/kobieta-blekit.webp'
  beshGirl = '../../assets/kobieta-bezowe.webp'
  

  ngOnInit(): void {
  }


  clickMe(){
    this.sharedService.sendClickEvent();
    }

}
