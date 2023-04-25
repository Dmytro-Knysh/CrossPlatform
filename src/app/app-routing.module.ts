import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
  {
    path: 'abstract-class',
    loadChildren: () => import('./abstract-class/abstract-class.module').then( m => m.AbstractClassPageModule)
  },
  {
    path: 'interfacepage',
    loadChildren: () => import('./interfacepage/interfacepage.module').then( m => m.InterfacepagePageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./servicepage/servicepage.module').then( m => m.ServicepagePageModule)
  },
  {
    path: 'lab8-blank',
    loadChildren: () => import('./lab8-blank/lab8-blank.module').then( m => m.Lab8BlankPageModule)
  },
  {
    path: 'observablepage',
    loadChildren: () => import('./observablepage/observablepage.module').then( m => m.ObservablepagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
