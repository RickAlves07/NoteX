import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public menuItems = [];

  constructor(
    public NotesService: NotesService
  ) {}

  ngOnInit()
  {
    this.NotesService.createInitTags();
    this.NotesService.createInitNotes();
    this.menuItems = this.NotesService.getTagsMenu();
  }

  setSelectedTagFilter(tag)
  {
    this.NotesService.setSelectedTagFilter(tag)
  }
}
