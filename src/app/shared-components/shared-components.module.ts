import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationHeaderComponent } from './components/application-header/application-header.component';
import { MaterialComponentsModule } from './modules/material-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApplicationHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
  ],
  exports: [
    ApplicationHeaderComponent,
    MaterialComponentsModule,
    FormsModule,
  ]
})
export class SharedComponentsModule { }
