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

  public folder: string;

  public goNewNotePage: any = null;

  public notes: Array<any> = []


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
  }

  goToNewNote()
  {
    this.goNewNotePage = { title: 'Tag 1', url: '/folder/add-new-note/add-new-note', icon: '' };
  }

  getNotes()
  {
    this.notes = this.NotesService.getNotes()
    // this.createInitNotes()
  }

  createInitNotes()
  {
  for(let i = 0; i <= 10  ; i++)
    {
      let notefake = {
        Title: "Title",
        Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Date: moment().startOf('day').format(this.DATE_FRONTEND_ONLY),
      }
      this.notes.push(notefake);
    }
  }
}
