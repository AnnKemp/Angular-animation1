import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [ 
      state('open', style({
        height: '1000px',
        width: '1000px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({ 
        height: '30px',
        width:'30px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      transition('open => closed', [ 
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
})
export class OpenCloseComponent{
  isOpen = true;

  toggle(){
    this.isOpen = ! this.isOpen;  
  }
}
