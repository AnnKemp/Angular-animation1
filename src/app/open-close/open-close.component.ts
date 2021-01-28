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
        height: '100px',
        width:'100px',
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
    this.isOpen = ! this.isOpen; // den toggle werkt ook niet, waar wordt die toggle functie aangeroepen?
  }
}
