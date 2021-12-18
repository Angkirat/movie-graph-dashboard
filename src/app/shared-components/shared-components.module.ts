import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationHeaderComponent } from './components/application-header/application-header.component';
import { MaterialComponentsModule } from './modules/material-components.module';
import { FormsModule } from '@angular/forms';
import { D3barchartComponent } from './components/d3barchart/d3barchart.component';

@NgModule({
  declarations: [
    ApplicationHeaderComponent,
    D3barchartComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
  ],
  exports: [
    ApplicationHeaderComponent,
    MaterialComponentsModule,
    D3barchartComponent,
    FormsModule,
  ]
})
export class SharedComponentsModule { }
