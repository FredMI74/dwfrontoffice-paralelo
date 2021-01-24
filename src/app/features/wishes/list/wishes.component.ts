import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfferComponent } from '../../../share/actions/offer/offer.component';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(id_wish: number) {
    const modalRef = this.modalService.open(OfferComponent);
    modalRef.componentInstance.id_wish = id_wish;
    }
}
