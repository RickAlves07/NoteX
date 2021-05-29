import { NoteDto } from 'src/app/dtos/note-dto';
import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.page.html',
  styleUrls: ['./add-new-note.page.scss'],
})

export class AddNewNotePage implements OnInit
{

  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";
  public readonly noteEmpty: NoteDto = null;
  public note: any = {}

  constructor(
    public NotesService: NotesService,
  ) { }

  ngOnInit() {}

  saveNote()
  {
    if(this.verifyIfFieldsIsEmpty())
    {
      this.note.CreatedDate = this.getDateWithDayOfWeek()
      this.NotesService.saveNote(this.note);
    }
    this.clearFields();
  }

  verifyIfFieldsIsEmpty()
  {
    const emptyString = '';
    const verifyTitle = ((this.note.Title != null && this.note.Title != emptyString) ? true : false);
    const verifyText = ((this.note.Text != null && this.note.Text != emptyString) ? true : false );
    return (verifyTitle || verifyText);
  }

  clearFields()
  {
    this.note = this.noteEmpty;
  }

  getDateWithDayOfWeek()
  {
    return this.NotesService.getDateWithDayOfWeek();
  }
}
