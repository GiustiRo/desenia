import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorRoutingModule } from './interior-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromInterior from './store/reducers/interior.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InteriorEffects } from './store/effects/interior.effects';
import { SharedModule } from '../shared/shared.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ThreeBoxComponent } from './components/three-box/three-box.component';
import { UICarouselModule } from 'ng-carousel-iuno';
import { IconsModule } from '../../components/icons/icons.module';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { DeProjectsComponent } from './components/de-projects/de-projects.component';


@NgModule({
  declarations: [
    ProjectCardComponent,
    ThreeBoxComponent,
    ProjectListComponent,
    DeProjectsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    InteriorRoutingModule,
    EffectsModule.forFeature([InteriorEffects]),
    StoreModule.forFeature(fromInterior.interiorsFeatureKey, fromInterior.reducer),
    UICarouselModule,
    IconsModule
  ],
  exports: [
    ProjectCardComponent,
    DeProjectsComponent,
    ThreeBoxComponent,
    UICarouselModule,
    IconsModule
  ]
})
export class InteriorModule { }
