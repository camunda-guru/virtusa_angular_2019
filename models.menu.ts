
export class ModelsMenu
{
  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
  private _label:string;
  private _icon:string;


  private _items:Item[]

  constructor(plabel:string,picon:string,pitems:Item[])
  {

    this._label=plabel;
    this._icon=picon;
    this._items=pitems;
  }

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




}




export class Item
{
  private _label:string;
  private _icon:string;

  constructor(plabel,picon)
  {
    this._label=plabel;
    this._icon=picon;
  }


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



