import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule) },
  { path: 'scroll', loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
