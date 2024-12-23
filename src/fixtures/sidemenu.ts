import { BoxSVG } from "../assets/icons/box";
import { CalendarSVG } from "../assets/icons/calendar";
import { CartSVG } from "../assets/icons/cart";
import { ChatSVG } from "../assets/icons/chat";
import { DocumentSVG } from "../assets/icons/document";
import { GridSVG } from "../assets/icons/grid";
import { MoneySVG } from "../assets/icons/money";
import { SettingSVG } from "../assets/icons/setting";
import { SupportSVG } from "../assets/icons/support";
import { IMenuItem } from "../interface";

export const menus: IMenuItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: GridSVG
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: BoxSVG
  },
  {
    title: 'Procurement',
    icon: CartSVG,
    subMenu: [
      {
        title: 'Quotes',
        path: '/procurement/quotes'
      },
      {
        title: 'Orders',
        path: '/procurement/orders'
      },
    ],
  },
  {
    title: 'Finance',
    icon: MoneySVG,
    subMenu: [
      {
        title: 'Help',
        path: '/finance/help'
      },
      {
        title: 'Analysis',
        path: '/finance/analysis'
      },
    ],
  },
  {
    title: 'Communication',
    path: '/communication',
    icon: ChatSVG
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: CalendarSVG
  },
  {
    title: 'Contracts',
    path: '/contracts',
    icon: DocumentSVG
  }
];

export const bottomMenus: IMenuItem[] = [
  {
    title: 'Support',
    path: '/support',
    icon: SupportSVG
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: SettingSVG
  }
]