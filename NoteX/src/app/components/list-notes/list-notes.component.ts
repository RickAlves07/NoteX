import { NotesService } from 'src/app/services/notes-service.service';
import { TagDto } from './../../dtos/tag-dto';
import { NoteDto } from 'src/app/dtos/note-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss'],
})
export class ListNotesComponent implements OnInit {

  @Input("notes") notes: Array<NoteDto> = [];
	@Input("tags") tags: Array<TagDto> = [];

  constructor(
    public NotesService: NotesService
  ) { }

  ngOnInit() {}

  setSelectedNoteToEdit(note, index)
  {
    this.NotesService.setSeletedNoteToEdit(note, index);
  }
}
