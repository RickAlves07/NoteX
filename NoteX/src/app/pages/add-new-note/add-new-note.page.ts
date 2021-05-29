import { NotesService } from 'src/app/services/notes-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';


declare var $: any;

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.page.html',
  styleUrls: ['./add-new-note.page.scss'],
})

export class AddNewNotePage implements OnInit {

  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";
  public readonly noteEmpty: any = null;
  public note: any = {}
  public localNotes: any = [];

  constructor(
    public NotesService: NotesService,
  ) { }

  ngOnInit() {

  }

  saveNote()
  {
    if(this.verifyIfFieldsIsEmpty())
    {
      const DateMonth = moment().startOf('day').format(this.DATE_FRONTEND_ONLY);
      const DateWeek = moment().startOf('date').locale('pt-br').format(this.DATE_WEEK_FORMAT_FRONTEND_ONLY);
      this.note.Date = String(DateWeek + ', ' + DateMonth);
      this.localNotes.push(this.note)
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
}
