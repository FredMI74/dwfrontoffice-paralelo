import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  
  @Input() id_wish: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
