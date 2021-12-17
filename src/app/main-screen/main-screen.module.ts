import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen.component';
import { MainScreenRoutingModule } from './main-screen-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    MainScreenRoutingModule,
    SharedComponentsModule,
  ]
})
export class MainScreenModule { }
