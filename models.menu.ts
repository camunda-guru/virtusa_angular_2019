
export class ModelsMenu
{
  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
  private _label:string;

  private _items:Item[]



}




export class Item
{
  private _label:string;
  private _icon:string;
  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }





}
