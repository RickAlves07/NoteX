import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public appPages = [];

  constructor(
    public readonly NotesService: NotesService
  ) {}

  ngOnInit()
  {
    this.NotesService.createInitNotes();
    this.NotesService.createInitTags();
  }
}
