import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTagPage } from './add-new-tag.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTagPageRoutingModule {}
