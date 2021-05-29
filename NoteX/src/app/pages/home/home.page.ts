import { NotesService } from '../../services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { NoteDto } from 'src/app/dtos/note-dto';
import { TagDto } from 'src/app/dtos/tag-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit
{
  public notes: Array<NoteDto> = [];
  public tags: Array<TagDto> = [];

  constructor
  (public readonly NotesService: NotesService,
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
