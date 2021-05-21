import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public appPages = [];

  constructor() {}

  ngOnInit()
  {
    this.getMenuTagsOptions()
  }

  getMenuTagsOptions()
  {
    this.appPages = [
      { title: 'Tag 1', url: '/folder/add-new-note/add-new-note', icon: '' },
      { title: 'Tag 2', url: '/folder/add-new-note/add-new-note', icon: '' },
      { title: 'Tag 3', url: '/folder/add-new-note/add-new-note', icon: '' },
      { title: 'Tag 4', url: '/folder/add-new-note/add-new-note', icon: '' },
      { title: 'Tag 5', url: '/folder/add-new-note/add-new-note', icon: '' },
    ]
  }
}
