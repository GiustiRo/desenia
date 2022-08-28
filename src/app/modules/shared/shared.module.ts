import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { IconsModule } from 'src/app/components/icons/icons.module';
import { DeferLoadingDirective } from './directives/defer-loading.directive';
import { DeseniaFramesComponent } from './components/desenia-frames/desenia-frames.component';
import { DeVerticalComponent } from './components/de-vertical/de-vertical.component';



@NgModule({
  declarations: [
    DeferLoadingDirective,
    DeseniaFramesComponent,
    DeVerticalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsModule
  ],
  exports: [
    HttpClientModule,
    IconsModule,
    DeferLoadingDirective,
    DeseniaFramesComponent,
    DeVerticalComponent
  ]
})
export class SharedModule { }
