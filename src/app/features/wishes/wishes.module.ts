import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { WishesComponent } from './list/wishes.component'
import { ComponentsModule } from '../../share/components/components.module';
import { OfferComponent } from '../../share/actions/offer/offer.component'

const routes: Routes = [
  {
    path: '',
    component: WishesComponent
  }
];

@NgModule({
  declarations: [ 
    WishesComponent,
    OfferComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class WishesModule { }

