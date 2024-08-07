import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routes/cards-routing.module';
import { CardsComponent } from './cards.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CardsComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CardsModule { }
