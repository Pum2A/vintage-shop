import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paypalIcon = '../../assets/paypal-logo';
  mastercardIcon = '../../assets/logo-mastercard.png';
  visaIcon = '../../assets/visa-logo.svg';
  bankIcon = '../../assets/logo-bank.webp';

}
