import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [ // dit werkt
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({ // dit werkt
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [ // de transities niet
        animate('7s')
      ]),
      transition('closed => open', [
        animate('7s')
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
