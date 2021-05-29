import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesWithTagPage } from './notes-with-tag.page';

const routes: Routes = [
  {
    path: '',
    component: NotesWithTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesWithTagPageRoutingModule {}
