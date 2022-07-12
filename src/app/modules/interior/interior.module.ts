import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorRoutingModule } from './interior-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromInterior from './store/reducers/interior.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InteriorEffects } from './store/effects/interior.effects';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    InteriorRoutingModule,
    EffectsModule.forFeature([InteriorEffects]),
    StoreModule.forFeature(fromInterior.interiorsFeatureKey, fromInterior.reducer)
  ]
})
export class InteriorModule { }
