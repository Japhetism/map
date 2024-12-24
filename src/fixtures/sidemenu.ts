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
    icon: GridSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: BoxSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  },
  {
    title: 'Procurement',
    icon: CartSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>,
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
    icon: MoneySVG as React.ComponentType<React.SVGProps<SVGSVGElement>>,
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
    icon: ChatSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: CalendarSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  },
  {
    title: 'Contracts',
    path: '/contracts',
    icon: DocumentSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
];

export const bottomMenus: IMenuItem[] = [
  {
    title: 'Support',
    path: '/support',
    icon: SupportSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: SettingSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
]