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
  public readonly NOTE_EMPTY = null;

  constructor() { }

  public notes: Array<NoteDto> = [];
  public tags: Array<TagDto> = [];
  public selectedTagFilter: TagDto;
  public selectedNoteToEdit: NoteDto;
  public indexSelectedNoteToEdit: number;

  saveNote(note)
  {
    note.Id = this.notes.length;
    this.notes.unshift(note);
    this.updateNoteId();
    this.clearSelectedNoteToEdit();
  }

  updateNote(note)
  {
    this.notes.splice(note.Id, 1);
    this.saveNote(note);
  }

  deleteNote(note)
  {
    this.notes.splice(note.Id, 1);
    this.updateNoteId();
  }

  updateNoteId()
  {
    let i = 0
    this.notes.forEach(note =>
    {
      this.notes[i].Id = i;
      i++;
    });
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
    for(let i = 0; i < 3 ; i++)
    {
      const notefake = {
        Title: ("Title " + i),
        Text: (i + " - Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
        Tags: this.tags,
        CreatedDate: this.getDateWithDayOfWeek(),
        EditedDate: null,
        Id: i,
      }
      this.notes.unshift(notefake);
    }
  }

  createInitTags()
  {
    for(let i = 0; i < 3; i++)
    {
      const tagFake = {
        Name: ('Tag ' + (i+1)),
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

  getTagsMenu()
  {
    let menuItens: Array<any> = [
      {
        Name: 'All',
        CreatedDate: null,
        EditedDate: null,
      }
    ];
    this.tags.forEach(tag =>
    {
      menuItens.push(tag)
    });
    return menuItens;
  }

  setSelectedTagFilter(tag: TagDto)
  {
    this.selectedTagFilter = tag;
  }

  setSeletedNoteToEdit(note: NoteDto, index)
  {
    this.selectedNoteToEdit = note;
    this.indexSelectedNoteToEdit = note.Id;
  }

  getSelectedNoteToEdit()
  {
    const noteToReturn = this.selectedNoteToEdit;
    this.clearSelectedNoteToEdit();
    return noteToReturn;
  }

  getSelectedTagFilter()
  {
    return this.selectedTagFilter;
  }

  clearSelectedNoteToEdit()
  {
    this.selectedNoteToEdit = this.NOTE_EMPTY;
    this.indexSelectedNoteToEdit = null;
  }

  searchTextNotes(textToFind)
  {
    return this.notes.filter(note =>
      note.Title.toLowerCase().includes(textToFind.toLowerCase()) ||
      note.Text.toLowerCase().includes(textToFind.toLowerCase()) ||
      note.CreatedDate.toLowerCase().includes(textToFind.toLowerCase()));
  }

  deleteTag(index)
  {
    this.tags.splice(index, 1);
  }

  saveNewTag(tag: TagDto)
  {
    this.tags.push(tag);
  }
}
