export interface IMenuItem {
  title: string
  path?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subMenu?: IMenuItem[]
};

export interface ILayout {
  children: React.ReactNode
}

export interface ISvg {
  color?: string
}