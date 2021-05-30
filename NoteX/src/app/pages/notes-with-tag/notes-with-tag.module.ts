import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotesWithTagPageRoutingModule } from './notes-with-tag-routing.module';
import { NotesWithTagPage } from './notes-with-tag.page';
import { ListNotesComponent } from 'src/app/components/list-notes/list-notes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesWithTagPageRoutingModule
  ],
  declarations: [NotesWithTagPage, ListNotesComponent]
})
export class NotesWithTagPageModule {}
