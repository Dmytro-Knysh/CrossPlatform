import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js/dist';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {
}
