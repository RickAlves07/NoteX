import { TagDto } from './../dtos/tag-dto';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { NoteDto } from '../dtos/note-dto';

@Injectable({
  providedIn: 'root'
})
export class NotesService
{
  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";

  constructor() { }

  public notes: Array<NoteDto> = [];
  public tags: Array<TagDto> = [];

  saveNote(note)
  {
    this.notes.unshift(note);
  }

  getNotes()
  {
    return this.notes;
  }

  getTags()
  {
    return this.tags;
  }

  createInitNotes()
  {
    for(let i = 1; i <= 3 ; i++)
    {
      const notefake = {
        Title: ("Title " + i),
        Text: (i + " - Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
        Tags: [],
        CreatedDate: this.getDateWithDayOfWeek(),
        EditedDate: null,
      }
      this.notes.push(notefake);
    }
  }

  createInitTags()
  {
    for(let i = 1; i <= 3; i++)
    {
      const tagFake = {
        Name: ('Tag ' + i),
        CreatedDate: this.getDateWithDayOfWeek(),
        EditedDate: null,
      }
      this.tags.push(tagFake);
    }
  }

  getDateWithDayOfWeek()
  {
    const DateMonth = moment().startOf('day').format(this.DATE_FRONTEND_ONLY);
    const DateWeek = moment().startOf('date').locale('pt-br').format(this.DATE_WEEK_FORMAT_FRONTEND_ONLY);
    return String(DateWeek + ', ' + DateMonth);
  }
}
