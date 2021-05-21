import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTagPageRoutingModule } from './add-new-tag-routing.module';

import { AddNewTagPage } from './add-new-tag.page';
import { NotesService } from 'src/app/services/notes-service.service';
import { NoteDto } from 'src/app/dtos/note-dto';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTagPageRoutingModule
  ],
  declarations: [AddNewTagPage]
})
export class AddNewTagPageModule
{
  public note: NoteDto;
  public newtag: string

  constructor
  (
    public notesService: NotesService,
  )
  {}

  ngOnInit()
  {

  }

  public creatingNeWTag()
  {

  }

  public savingNewTag()
  {
  }

}
