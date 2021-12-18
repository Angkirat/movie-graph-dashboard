import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

const material_components = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
]

@NgModule({
  exports: [
    material_components
  ]
})
export class MaterialComponentsModule { }
