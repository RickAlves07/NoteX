import { TagDto } from './../dtos/tag-dto';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { NoteDto } from '../dtos/note-dto';
import Utils from '../utilities/utilities-object';

@Injectable({
  providedIn: 'root'
})
export class NotesService
{
  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";
  public readonly NOTE_EMPTY = new NoteDto;
  public readonly TAG_EMPTY = new TagDto;

  constructor() { }

  public notes: Array<NoteDto> = [];
  public tags: Array<TagDto> = [];
  public selectedTagFilter: TagDto;
  public selectedNoteToEdit: NoteDto = new NoteDto;
  public indexSelectedNoteToEdit: number;
  public selectedTagToAddInNote: TagDto = new TagDto;

  saveNote(note)
  {
    this.notes.unshift(Utils.objectCopy(note));
    this.updateNotesIds();
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
    this.updateNotesIds();
  }

  updateNotesIds()
  {
    let i = 0;
    this.notes.forEach(note =>
    {
      this.notes[i].Id = i;
      i++;
    });
  }

  updateTagsIds()
  {
    let i = 0;
    this.tags.forEach(tag =>
    {
      this.tags[i].Id = i;
      i++;
    });
  }

  getNotes()
  {
    return Utils.objectCopy(this.notes);
  }

  getTags()
  {
    return Utils.objectCopy(this.tags);
  }

  createInitNotes()
  {
    for(let i = 0; i < 3 ; i++)
    {
      const notefake = {
        Title: ("Title " + i),
        Text: (i + " - Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
        Tags: Utils.objectCopy(this.tags),
        CreatedDate: Utils.objectCopy(this.getDateWithDayOfWeek()),
        EditedDate: null,
        Id: i,
      }
      this.notes.unshift(Utils.objectCopy(notefake));
    }
    this.updateNotesIds();
  }

  createInitTags()
  {
    for(let i = 0; i < 3; i++)
    {
      const tagFake = {
        Name: ('Tag ' + (i+1)),
        CreatedDate: this.getDateWithDayOfWeek(),
        EditedDate: null,
        Id: i
      }
      this.tags.push(tagFake);
    }
    this.updateTagsIds();
  }

  getDateWithDayOfWeek()
  {
    const DateMonth = moment().startOf('day').format(this.DATE_FRONTEND_ONLY);
    const DateWeek = moment().startOf('date').locale('pt-br').format(this.DATE_WEEK_FORMAT_FRONTEND_ONLY);
    return Utils.objectCopy(String(DateWeek + ', ' + DateMonth));
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
    return Utils.objectCopy(menuItens);
  }

  setSelectedTagFilter(tag)
  {debugger
    this.selectedTagFilter = Utils.objectCopy(tag);
  }

  setSeletedNoteToEdit(note: NoteDto)
  {
    this.selectedNoteToEdit = Utils.objectCopy(note);
    this.indexSelectedNoteToEdit = Utils.objectCopy(note.Id);
  }

  getSelectedNoteToEdit()
  {
    const noteToReturn = Utils.objectCopy(this.selectedNoteToEdit);
    this.clearSelectedNoteToEdit();
    return Utils.objectCopy(noteToReturn);
  }

  getSelectedTagFilter()
  {debugger
    return Utils.objectCopy(this.selectedTagFilter);
  }

  clearSelectedNoteToEdit()
  {
    this.selectedNoteToEdit = Utils.objectCopy(this.NOTE_EMPTY);
    this.indexSelectedNoteToEdit = null;
  }

  searchTextNotes(textToFind)
  {
    return Utils.objectCopy(this.notes.filter(note =>
      note.Title.toLowerCase().includes(textToFind.toLowerCase()) ||
      note.Text.toLowerCase().includes(textToFind.toLowerCase()) ||
      note.CreatedDate.toLowerCase().includes(textToFind.toLowerCase()) ||
      note.Tags.filter(tag =>
        tag.Name.toLowerCase().includes(textToFind.toLowerCase()))));
  }

  deleteTag(tagToDelete)
  {
    this.tags.splice(tagToDelete.Id, 1);
    this.removeDeletedTagFromNotes(tagToDelete);
  }

  removeDeletedTagFromNotes(tagDeleted)
  {
    for(let indexNotes = 0; indexNotes < this.notes.length; indexNotes++)
    {
      for(let indexTagInNote= 0; indexTagInNote < this.notes[indexNotes].Tags.length; indexTagInNote++)
      {
        if(this.notes[indexNotes].Tags[indexTagInNote].Name.toLowerCase() == tagDeleted.Name.toLowerCase())
        {
          this.notes[indexNotes].Tags.splice(tagDeleted.Id, 1);
        }
      }
    }
    this.updateTagsIds();
  }

  saveNewTag(tagTosave: TagDto)
  {
    const verifyIfTagExist = this.tags.filter(tag =>
      tag.Name.toLowerCase() == tagTosave.Name.toLowerCase());
      if(verifyIfTagExist.length == 0)
      {
        this.tags.push(tagTosave);
        this.updateTagsIds();
      }
  }

  searchNotesWithTag(tagToFilter)
  {debugger
    let notesWithTagToReturn: Array<NoteDto> = []
    for(let indexNotes = 0; indexNotes < this.notes.length; indexNotes++)
    {
      for(let indexTag = 0; indexTag < this.notes[indexNotes].Tags.length; indexTag++)
      {
        if(this.notes[indexNotes].Tags[indexTag].Name === tagToFilter.Name)
        {
          notesWithTagToReturn.unshift(this.notes[indexNotes])
        }
      }
    };
    return notesWithTagToReturn;
  }

  setSelectedTagToAddInNote(tag)
  {debugger
    this.selectedTagToAddInNote = Utils.objectCopy(tag);
  }

  getSelectedTagToAddInNote()
  {
    const tagToReturn = Utils.objectCopy(this.selectedTagToAddInNote);
    this.selectedTagToAddInNote = Utils.objectCopy(this.TAG_EMPTY);
    return tagToReturn;
  }
}
