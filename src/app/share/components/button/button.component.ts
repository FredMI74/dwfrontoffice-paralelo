import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label: string = 'dw-button' ;
  @Input() classUsed: string = 'defaultBtn';

  constructor() {
   }
}
