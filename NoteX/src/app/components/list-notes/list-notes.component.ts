import { Component, Input, OnInit } from '@angular/core';

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
