export default class Utils
{
  public static objectCopy(objectToCopy: any): any
	{
		let result = null
		if(objectToCopy != null)
		{
			result = JSON.parse(JSON.stringify(objectToCopy));
		}
		return result;
	}
}
