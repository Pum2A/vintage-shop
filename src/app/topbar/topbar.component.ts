import { transition, trigger, state , animate, style,  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({
        transform: 'translate3d(0,0,0)'

      })),
      state('out', style({
        transform: 'translate3d(-30%,0,0)',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
      transition('in => in', animate('300ms ease-in-out')),
    ]),
    trigger('hide', [
      state('in', style({


      })),
      state('out', style({
        display: 'none',

        
      })),
      transition('in => out', animate('1ms ease-in')),
      // transition('out => in', animate('1ms ease-out')),
    ]),
    trigger('show', [
      state('in', style({
        transform: 'translate3d(60%,0,0)',
        // margin:'0px 0px 0px 50px'



      })),
      state('out', style({
        display:'none',
        // margin:'0px 0px 0px 50px'

      })),
      transition('out => in', animate('1ms ease-in')),
      transition('in => out', animate('1ms ease-out')),
    ]),
    trigger('menu', [
      state('in', style({
        // transform: 'translate3d(0,0,0)'

      })),
      state('out', style({
        transform: 'translate3d(25px,0,0)',
        // margin: '0px 0px 0px 20px'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
      transition('in => in', animate('300ms ease-in-out')),
    ]),
  ]
  

})
export class TopbarComponent implements OnInit {

  constructor() { }


  sidenav:string = 'in';
  hide:string = 'in';
  show:string = 'out';
  menu:string = 'in';

  ngOnInit(): void {
  }
  
  onClick(){
    this.sidenav = this.sidenav === 'out' ? 'in ' : 'out'
    this.hide = this.hide === 'out' ? 'in' : 'out'
    this.show = this.show === 'out' ? 'in' : 'out'
    this.menu = this.menu === 'out' ? 'in' : 'out'


  }
  
}
