import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab8BlankPageRoutingModule } from './lab8-blank-routing.module';

import { Lab8BlankPage } from './lab8-blank.page';
import { MyFormComponent } from './my-form/my-form.component';
import { MyHeaderModule } from "../my-header/my-header.component.module";

@NgModule({
    declarations: [Lab8BlankPage, MyFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Lab8BlankPageRoutingModule,
        ReactiveFormsModule,
        MyHeaderModule
    ]
})
export class Lab8BlankPageModule {}
