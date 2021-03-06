import { NoteDto } from '../../dtos/note-dto';
import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { TagDto } from 'src/app/dtos/tag-dto';
import { interval } from 'rxjs';
import Utils from 'src/app/utilities/utilities-object';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.page.html',
  styleUrls: ['./add-new-note.page.scss'],
})

export class AddNewNotePage implements OnInit
{
  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";
  public readonly NOTE_EMPTY = new NoteDto;
  public readonly NEW_NOTE_STRING = 'New Note';
  public readonly EDIT_NOTE_STRING ='Edit Note';
  public readonly TAG_EMPTY = new TagDto;
  public note: NoteDto = new NoteDto;
  public pageTitle: string;
  public isEdit: boolean;
  public refresh: any;

  constructor
  (
    public NotesService: NotesService,
  ) {}

  ngOnInit()
  {
    this.verifyIsEditOrNewNote();
    this.verifyIfHasSelectedTagToAdd();
  }

  saveNote()
  {
    if(this.verifyIfFieldsIsEmpty())
    {
      this.saveNewNoteOrUpdateNote();
    }
    this.clearFields();
  }

  saveNewNoteOrUpdateNote()
  {
    if(this.isEdit)
    {
      this.note.EditedDate = this.getDateWithDayOfWeek()
      this.NotesService.updateNote(this.note);
    }
    else
    {
      this.note.CreatedDate = this.getDateWithDayOfWeek()
      this.NotesService.saveNote(this.note);
    }
  }

  verifyIfFieldsIsEmpty()
  {
    const emptyString = '';
    const verifyTitle = ((this.note.Title != null && this.note.Title != emptyString) ? true : false);
    const verifyText = ((this.note.Text != null && this.note.Text != emptyString) ? true : false );
    return (verifyTitle || verifyText);
  }

  deleteNote()
  {
    if(this.isEdit)
    {
      this.NotesService.deleteNote(this.note);
    }
    this.clearFields;
  }

  clearFields()
  {
    this.note = Utils.objectCopy(this.NOTE_EMPTY);
  }

  getDateWithDayOfWeek()
  {
    return this.NotesService.getDateWithDayOfWeek();
  }

  verifyIsEditOrNewNote()
  {
    const noteToEdit = this.NotesService.getSelectedNoteToEdit()
    if((noteToEdit.Title == '') && (noteToEdit.Text == ''))
    {
      this.isEdit = false;
      this.pageTitle = this.NEW_NOTE_STRING;
    }
    else
    {
      this.note = noteToEdit;
      this.isEdit = true;
      this.pageTitle = this.EDIT_NOTE_STRING;
    }
  }
  removeTagFromNote(index)
  {
    this.note.Tags.splice(index, 1);
  }

  getSelectedTagToAddInNote()
  {
    const tagTemp = this.NotesService.getSelectedTagToAddInNote();
    if((tagTemp.Name != undefined) && (tagTemp.Name !== null) && (tagTemp !== this.TAG_EMPTY) && (tagTemp.Name !== ''))
    {
      const test = this.note.Tags.filter(tag => tag.Name == tagTemp.Name)
      if(test.length == 0)
      {
        this.note.Tags.push(tagTemp);
      }
    }
  }

  verifyIfHasSelectedTagToAdd()
  {
    interval(500)
    .subscribe(() => {
      this.getSelectedTagToAddInNote();
      this.removeDeletedTags();
    });
  }

  removeDeletedTags()
  {
    let noteHasATagOfAllSavedTags = false;
    const AllsavedTags = this.NotesService.getTags()
    if(this.note.Tags.length !== AllsavedTags.lenght)
    {
      for(let indexTagInNote = 0; indexTagInNote < this.note.Tags.length; indexTagInNote++)
      {
        for(let indexAllTags = 0; indexAllTags < AllsavedTags.length; indexAllTags++)
        {
          noteHasATagOfAllSavedTags = false;
          if(AllsavedTags[indexAllTags].Name.toLowerCase() == this.note.Tags[indexTagInNote].Name.toLowerCase())
          {
            noteHasATagOfAllSavedTags = true;
            break;
          }
        }
        if(!noteHasATagOfAllSavedTags)
        {
          this.note.Tags.splice(this.note.Tags[indexTagInNote].Id , 1);
        }
      }
    }
  }
}
