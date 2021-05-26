import { AddNewNotePage } from './add-new-note/add-new-note.page';
import { NotesService } from './../services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit  {

  public readonly DATE_FRONTEND_ONLY = "DD/MM/YYYY";
  public readonly DATE_WEEK_FORMAT_FRONTEND_ONLY = "dddd";

  public folder: string;

  public goNewNotePage: any = null;

  public notes: Array<any> = [];

  public tags: Array<any> = [];

  constructor
  (
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public NotesService: NotesService,
  ) { }

  ngOnInit()
  {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getNotes()
    this.createInitNotes();
    this.createInitTags();
  }

  goToNewNote()
  {
    this.goNewNotePage = { title: 'Tag 1', url: '/folder/add-new-note/add-new-note', icon: '' };
  }

  getNotes()
  {
    this.notes = this.NotesService.getNotes()
  }

  createInitNotes()
  {
    const DateMonth = moment().startOf('day').format(this.DATE_FRONTEND_ONLY);
    const DateWeek = moment().startOf('date').locale('pt-br').format(this.DATE_WEEK_FORMAT_FRONTEND_ONLY);
    for(let i = 1; i <= 3 ; i++)
    {
      let notefake = {
        Title: ("Title " + i),
        Text: (i + " - Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
        Date: String(DateWeek + ', ' + DateMonth),
      }
      this.notes.push(notefake);
    }
  }

  createInitTags()
  {
    for(let i = 1; i <= 3; i++)
    {
      let tagFake = ('Tag ' + i)
      this.tags.push(tagFake);
    }
  }
}
