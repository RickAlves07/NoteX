import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.page.html',
  styleUrls: ['./search-note.page.scss'],
})
export class SearchNotePage implements OnInit {

  public notes: Array<any> = [];

  public tags: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
