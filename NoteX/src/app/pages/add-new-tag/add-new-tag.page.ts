import { TagDto } from '../../dtos/tag-dto';
import { NotesService } from 'src/app/services/notes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-tag',
  templateUrl: './add-new-tag.page.html',
  styleUrls: ['./add-new-tag.page.scss'],
})

export class AddNewTagPage implements OnInit
{
  public readonly TAG_EMPTY: TagDto = new TagDto;
  public readonly EMPTY_STRING = '';
  public textTag: Array<string> = [''];
  public textNewTag: string = '';
  public tags: Array<TagDto> = [];
  public isEdit: Array<boolean> = [false];
  public isAdd: boolean;
  public newTag: TagDto = new TagDto;
  constructor(
    public NotesService: NotesService,
  ) { }

  ngOnInit()
  {
    this.getTags();
  }

  getTags()
  {
    this.tags = this.NotesService.getTags()
  }

  editTag(index)
  {
    this.isEdit[index] = true;
    this.textTag[index] = this.tags[index].Name;
  }

  confirmEditTag(index)
  {
    if(this.textTag[index] != this.EMPTY_STRING)
    {
      this.tags[index].Name = this.textTag[index];
      this.tags[index].EditedDate = this.getDateWithDayOfWeek();
      this.isEdit[index] = false;
    }
    else if(this.textTag[index] == this.EMPTY_STRING)
    {
      this.isEdit[index] = false;
    }
  }

  deleteTagFromService(tagToDelete)
  {
    this.NotesService.deleteTag(tagToDelete)
    this.getTags();
  }

  comfirmAddNewTag()
  {
    if((this.textNewTag != this.EMPTY_STRING) && (this.isAdd))
    {
      this.newTag.Name = this.textNewTag;
      this.newTag.CreatedDate = this.getDateWithDayOfWeek();
      this.newTag.EditedDate = null;
      this.saveNewTag();
      this.getTags();
    }
  }

  saveNewTag()
  {
    this.isAdd = false;
    this.NotesService.saveNewTag(this.newTag);
    this.clearNewTag();
  }

  getDateWithDayOfWeek()
  {
    return this.NotesService.getDateWithDayOfWeek();
  }

  cancelAddNewTag()
  {
    this.textNewTag = this.EMPTY_STRING;
    this.isAdd = false;
  }

  addNewTag()
  {
    this.isAdd = true;
  }

  clearNewTag()
  {
    this.textNewTag = this.EMPTY_STRING;
    this.newTag = this.TAG_EMPTY;
  }

  setSelectedTagToAddInNote(tag)
  {
    this.NotesService.setSelectedTagToAddInNote(tag);
  }
}
