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