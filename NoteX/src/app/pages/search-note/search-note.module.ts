import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchNotePageRoutingModule } from './search-note-routing.module';

import { SearchNotePage } from './search-note.page';
import { ListNotesComponent } from 'src/app/components/list-notes/list-notes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchNotePageRoutingModule
  ],
  declarations: [SearchNotePage, ListNotesComponent]
})
export class SearchNotePageModule {}
