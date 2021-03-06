import { TagDto } from './tag-dto';
export class NoteDto
{
  public Id: number;
  public Title: string = '';
  public Text: string = '';
  public Tags: Array<TagDto> = [];
  public CreatedDate: string = '';
  public EditedDate: string = '';
}
