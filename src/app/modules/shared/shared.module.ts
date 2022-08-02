import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { IconsModule } from 'src/app/components/icons/icons.module';
// import { PhotoModule } from 'src/app/modules/photo/photo.module';
import { DeferLoadingDirective } from './directives/defer-loading.directive';
import { DeseniaFramesComponent } from './components/desenia-frames/desenia-frames.component';



@NgModule({
  declarations: [
    DeferLoadingDirective,
    DeseniaFramesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsModule,
    // PhotoModule
  ],
  exports: [
    HttpClientModule,
    IconsModule,
    DeferLoadingDirective,
    DeseniaFramesComponent
  ]
})
export class SharedModule { }
