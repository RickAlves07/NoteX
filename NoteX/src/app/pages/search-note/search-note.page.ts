import { Component, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/dtos/note-dto';
import { TagDto } from 'src/app/dtos/tag-dto';
import { NotesService } from '../../services/notes-service.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.page.html',
  styleUrls: ['./search-note.page.scss'],
})
export class SearchNotePage implements OnInit {

  public notes: Array<NoteDto> = [];
  public tags: Array<TagDto> = [];

  constructor
  (public NotesService: NotesService,
  ) { }

  ngOnInit()
  {
    this.getNotes()
    this.getTags();
  }

  getNotes()
  {
    this.notes = this.NotesService.getNotes()
  }

  getTags()
  {
    this.tags = this.NotesService.getTags()
  }
}
