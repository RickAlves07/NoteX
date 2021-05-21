import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'add-new-tag',
    loadChildren: () => import('./add-new-tag/add-new-tag.module').then( m => m.AddNewTagPageModule)
  },
  {
    path: 'add-new-note',
    loadChildren: () => import('./add-new-note/add-new-note.module').then( m => m.AddNewNotePageModule)
  },
  {
    path: 'search-note',
    loadChildren: () => import('./search-note/search-note.module').then( m => m.SearchNotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
