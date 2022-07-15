import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromPhoto from './store/reducers/photo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './store/effects/photo.effects';
import { SharedModule } from '../shared/shared.module';
import { PhotoService } from './services/photo.service';
import { PhotoSectionComponent } from './components/photo-section/photo-section.component';


@NgModule({
  declarations: [
    PhotoSectionComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    SharedModule,
    // StoreModule.forFeature(fromPhoto.photoesFeatureKey, fromPhoto.reducer),
    EffectsModule.forFeature([PhotoEffects]),
    StoreModule.forFeature(fromPhoto.photoesFeatureKey, fromPhoto.reducer)
  ], 
  providers:[PhotoService]
})
export class PhotoModule { }
