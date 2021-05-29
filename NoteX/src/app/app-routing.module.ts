import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-new-note',
    loadChildren: () => import('./pages/add-new-note/add-new-note.module').then( m => m.AddNewNotePageModule)
  },
  {
    path: 'add-new-tag',
    loadChildren: () => import('./pages/add-new-tag/add-new-tag.module').then( m => m.AddNewTagPageModule)
  },
  {
    path: 'search-note',
    loadChildren: () => import('./pages/search-note/search-note.module').then( m => m.SearchNotePageModule)
  },
  {
    path: 'notes-with-tag',
    loadChildren: () => import('./pages/notes-with-tag/notes-with-tag.module').then( m => m.NotesWithTagPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
