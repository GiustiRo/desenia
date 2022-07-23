import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';

const routes: Routes = [
  {path: '', component: ProjectCardComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorRoutingModule { }
