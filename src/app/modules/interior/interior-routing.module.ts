import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [
  // {path: '', redirectTo: ':id',},
  {path: '', component: ProjectListComponent },
  // {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorRoutingModule { }
