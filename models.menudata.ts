import {Item, ModelsMenu} from "./models.menu";


export  let data:ModelsMenu[]=[

  new ModelsMenu('Add', 'pi pi-fw pi-plus',[new Item('Revenue Reporting','pi pi-fw pi-share-alt'),
    new Item('Revenue Editor','pi pi-fw pi-pencil'),
    new Item('PENL','pi pi-fw pi-cog'),
    new Item('Trade Authorization','pi pi-fw pi-key'),
    new Item('Blogging','pi pi-fw pi-comment')

  ]),
  new ModelsMenu('Quit', 'pi pi-fw pi-sign-out',[ ])

]
