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
      { title: 'Todas', url: '/folder/add-new-note/add-new-note', icon: '' },
    ]
  }

  teste()
  {

  }
}
