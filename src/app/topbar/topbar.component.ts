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
        transform: 'translate3d(-20%,0,0)',
      })),
      transition('in => out', animate('600ms ease-in-out')),
      transition('out => in', animate('600ms ease-in-out')),
      transition('in => in', animate('600ms ease-in-out')),
    ]),
    trigger('hide', [
      state('in', style({


      })),
      state('out', style({
        display: 'none',

        
      })),
      transition('in => out', animate('1ms ease-in')),
      transition('out => in', animate('1ms ease-out')),
    ]),
    trigger('show', [
      state('in', style({
        transform: 'translate3d(60%,0,0)',
    


      })),
      state('out', style({
        display:'none',

      })),
      transition('out => in', animate('1ms ease-in')),
      transition('in => out', animate('1ms ease-out')),
    ]),
  ]
  

})
export class TopbarComponent implements OnInit {

  constructor() { }


  sidenav:string = 'in';
  hide:string = 'in';
  show:string = 'out';

  ngOnInit(): void {
  }
  
  onClick(){
    this.sidenav = this.sidenav === 'out' ? 'in ' : 'out'
    this.hide = this.hide === 'out' ? 'in' : 'out'
    this.show = this.show === 'out' ? 'in' : 'out'


  }
  
}
