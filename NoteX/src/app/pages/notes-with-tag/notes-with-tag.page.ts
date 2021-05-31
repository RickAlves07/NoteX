import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NoteDto } from 'src/app/dtos/note-dto';
import { TagDto } from 'src/app/dtos/tag-dto';
import { NotesService } from '../../services/notes-service.service';

@Component({
  selector: 'app-notes-with-tag',
  templateUrl: './notes-with-tag.page.html',
  styleUrls: ['./notes-with-tag.page.scss'],
})
export class NotesWithTagPage implements OnInit {
  public readonly TAG_EMPTY = new TagDto;
  public notesFiltered: Array<NoteDto> = [];
  public tagTofilter: TagDto = new TagDto;

  constructor
  (public NotesService: NotesService,
  ) { }

  ngOnInit()
  {
    this.getSelectedTagFilter();
  }

  getSelectedTagFilter()
  {
    this.tagTofilter = this.NotesService.getSelectedTagFilter();
    if(this.tagTofilter.Name != '')
    {
      this.getfilteredNotesByTag();
    }
  }

  getfilteredNotesByTag()
  {
    this.notesFiltered = this.NotesService.searchNotesWithTag(this.tagTofilter);
  }
}
