import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { TagDto } from './dtos/tag-dto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public menuItems = [];
  public tags: Array<TagDto> = [];

  constructor(
    public NotesService: NotesService
  ) {}

  ngOnInit()
  {
    this.NotesService.createInitTags();
    this.NotesService.createInitNotes();
    this.menuItems = this.getTagsMenu();
  }

  setSelectedTagFilter(tag)
  {
    this.NotesService.setSelectedTagFilter(tag)
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
    this.tags = this.NotesService.getTags();
    this.tags.forEach(tag =>
    {
      menuItens.push(tag)
    });
    return menuItens;
  }
}
