import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewNotePage } from './add-new-note.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewNotePageRoutingModule {}
