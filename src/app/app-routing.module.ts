import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'interior',
    loadChildren: () => import('./modules/interior/interior.module').then(m => m.InteriorModule)
  },
  // { path: '**', redirectTo: 'interior', pathMatch: 'full' },
  // { path: '', redirectTo: 'interior', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
