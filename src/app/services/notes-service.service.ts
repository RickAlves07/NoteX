import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteDto } from '../dtos/note-dto';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  public notes: Array<any> = []
  //INIT Notes

  saveNote(note)
  {
    this.notes.unshift(note);
  }

  getNotes()
  {
    return this.notes;
  }

}
