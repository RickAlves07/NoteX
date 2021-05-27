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
      { title: 'Todas', url: '', icon: '' },
    ]
    // const tags = this.getTags()
    // this.appPages.push(tags);
  }

  getTags()
  {
    //test
  }
}
