import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesWithTagPageRoutingModule } from './notes-with-tag-routing.module';

import { NotesWithTagPage } from './notes-with-tag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesWithTagPageRoutingModule
  ],
  declarations: [NotesWithTagPage]
})
export class NotesWithTagPageModule {}
