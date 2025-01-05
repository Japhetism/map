export type Status = 'awaiting' | 'rejected' | 'approved';

export interface IMenuItem {
  title: string
  path?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  subMenu?: IMenuItem[]
};

export interface ILayout {
  children: React.ReactNode
}

export interface ISvg {
  color?: string
  width?: string
  height?: string
}

export interface ISearchInput {
  placeholder: string
  searchQuery: string
  classname?: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IDropdown {
  classname?: string
  buttonIcon: React.ReactNode;
  menuItems: string[];
  onItemClick: (item: string) => void;
}

interface Requestor {
  name: string;
  role: string;
  department: string;
}

interface Client {
  name: string;
  address: string;
}

interface Item {
  name: string;
  itemNo: string;
  variant: string;
  qty: number;
  unit: string;
  price: number;
  expectedDeliveryDate: string;
}

export interface IQuote {
  status: Status;
  title: string;
  refno: string;
  requestor: Requestor;
  department: string;
  client: Client;
  expectedDelivery: string;
  dateCreated: string;
  items: Item[];
  notes: string;
  paymentType: "Net 30" | "Net 45";
  shippingMethod: "Courier Services" | "Air Freight";
  leadTime: number;
  deliverySchedule: string;
  attachements: any[];
}

export interface IStatusBadge {
  status: Status;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface IBreadcrumb {
  items: BreadcrumbItem[];
}

export interface IActionButton {
  title: string
  classname: string
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onclick: () => void
}

export interface ILabelValue {
  label: string;
  value: string | number | undefined;
}