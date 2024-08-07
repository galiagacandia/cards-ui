import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CARD_ROUTES_CONFIG} from "./cards-routes";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(CARD_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
