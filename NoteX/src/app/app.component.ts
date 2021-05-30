import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { TagDto } from './dtos/tag-dto';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public menuItems = [];
  public tags: Array<any> = [];

  constructor(
    public NotesService: NotesService
  ) {}

  ngOnInit()
  {
    this.NotesService.createInitTags();
    this.NotesService.createInitNotes();
  }

  setSelectedTagFilter(tag)
  {
    this.NotesService.setSelectedTagFilter(tag)
  }

  getTagsMenu()
  {
    this.tags = this.NotesService.getTags();
    let menuItens: Array<any> = [
      {
        Name: 'All',
        Url: '',
      }
    ];
    this.menuItems.push(menuItens);

    this.tags.forEach(tag =>
    {
      tag.Url = '/notes-with-tag'
      this.menuItems.push(tag)
    });
  }

  verifyIfHasNewTags()
  {
    let menuHasATagOfAllSavedTags = false;
    for(let indexTagInNote = 0; indexTagInNote < this.menuItems.length; indexTagInNote++)
    {
      for(let indexAllTags = 0; indexAllTags < this.tags.length; indexAllTags++)
      {
        menuHasATagOfAllSavedTags = false;
        if(this.tags[indexAllTags].Name.toLowerCase() == this.menuItems[indexTagInNote].Name.toLowerCase())
        {
          menuHasATagOfAllSavedTags = true;
          break;
        }
        else if(!menuHasATagOfAllSavedTags && this.menuItems[indexTagInNote].Name != 'All')
        {
          this.menuItems.push(this.tags[indexAllTags]);
        }
      }
    }
  }

  removeMenuItens()
  {
    let menuHasATagOfAllSavedTags = false;
    for(let indexTagInNote = 0; indexTagInNote < this.menuItems.length; indexTagInNote++)
    {
      for(let indexAllTags = 0; indexAllTags < this.tags.length; indexAllTags++)
      {
        menuHasATagOfAllSavedTags = false;
        if(this.tags[indexAllTags].Name.toLowerCase() == this.menuItems[indexTagInNote].Name.toLowerCase())
        {
          menuHasATagOfAllSavedTags = true;
          break;
        }
      }
      if(!menuHasATagOfAllSavedTags && this.menuItems[indexTagInNote].Name != 'All')
      {
        this.menuItems.splice(this.menuItems[indexTagInNote].Id , 1);
      }
    }
  }

  refreshMenuItens()
  {
    interval(500)
    .subscribe(() => {
      this.tags = this.NotesService.getTags();
      this.removeMenuItens();
      this.verifyIfHasNewTags();
    });
  }
}
