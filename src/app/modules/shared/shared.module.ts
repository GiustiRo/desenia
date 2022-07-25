import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { IconsModule } from 'src/app/components/icons/icons.module';
import { DeferLoadingDirective } from './directives/defer-loading.directive';



@NgModule({
  declarations: [
    DeferLoadingDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsModule
  ],
  exports: [
    HttpClientModule,
    IconsModule,
    DeferLoadingDirective
  ]
})
export class SharedModule { }
