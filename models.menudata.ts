import {Item, ModelsMenu} from "./models.menu";


export  let data:ModelsMenu[]=[

  new ModelsMenu('Add', 'pi pi-fw pi-plus',[new Item('RevenueReporting',

    'pi pi-fw pi-share-alt',[{ outlets: { RROutlet: ['' +
        ''] } }]),
    new Item('RevenueEditor','pi pi-fw pi-pencil',[{ outlets: { REOutlet: ['RevenueEditor'] } }]),
    new Item('PENL','pi pi-fw pi-cog',[]),
    new Item('TradeAuthorization','pi pi-fw pi-key',[]),
    new Item('Blogging','pi pi-fw pi-comment',[])

  ]),
  new ModelsMenu('Quit', 'pi pi-fw pi-sign-out',[ ])

]
