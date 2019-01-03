import {Item, ModelsMenu} from "./models.menu";


export  let data:ModelsMenu[]=[

  new ModelsMenu('Add', [new Item('Revenue Reporting','pi pi-fw pi-plus'),
    new Item('Revenue Editor','pi pi-fw pi-trash'),
    new Item('PENL','pi pi-fw pi-plus'),
    new Item('Trade Authorization','pi pi-fw pi-plus'),
    new Item('Blogging','pi pi-fw pi-plus')

  ]),
  new ModelsMenu('Quit', [ ])

]
