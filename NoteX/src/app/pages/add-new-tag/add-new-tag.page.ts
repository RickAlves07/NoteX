import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { TagDto } from 'src/app/dtos/tag-dto';

@Component({
  selector: 'app-add-new-tag',
  templateUrl: './add-new-tag.page.html',
  styleUrls: ['./add-new-tag.page.scss'],
})
export class AddNewTagPage implements OnInit
{
  public textTag: Array<string>;
  public textNewTag: string;
  public tags: Array<TagDto> = [];
  public isEdit: Array<boolean> = [false];
  public isAdd: boolean;
  constructor(
    public NotesService: NotesService
  ) { }

  ngOnInit()
  {
    this.getTags();
  }

  getTags()
  {
    this.tags = this.NotesService.getTags()
  }


}
