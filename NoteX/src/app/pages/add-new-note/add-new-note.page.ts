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

  public note: any = {}
  public localNotes: any = [];


  public noteEmpty: any = null;

  constructor(
    public NotesService: NotesService,
  ) { }

  ngOnInit() {

  }

  saveNote()
  {
    const DateMonth = moment().startOf('day').format(this.DATE_FRONTEND_ONLY);
    const DateWeek = moment().startOf('date').locale('pt-br').format(this.DATE_WEEK_FORMAT_FRONTEND_ONLY);
    this.note.Date = String(DateWeek + ', ' + DateMonth);
    this.localNotes.push(this.note)
    this.NotesService.saveNote(this.note);
  }

}
