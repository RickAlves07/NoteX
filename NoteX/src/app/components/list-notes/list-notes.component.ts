import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss'],
})
export class ListNotesComponent implements OnInit {

  @Input("notes") notes: Array<any> = [];
	@Input("tags") tags: Array<any> = [];

  constructor() { }

  ngOnInit() {}

}
