import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('OpenClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }
  constructor() { }

 
  

  ngOnInit(): void {
  }

}
