import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab8BlankPage } from './lab8-blank.page';

const routes: Routes = [
  {
    path: '',
    component: Lab8BlankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab8BlankPageRoutingModule {}
