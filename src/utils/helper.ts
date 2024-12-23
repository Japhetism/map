import { IMenuItem } from "../interface";

export const isActive = (locationPathname: string, path: string | undefined, subMenu: IMenuItem[] | undefined): boolean => {
  if (path && locationPathname === path) {
    return true;
  }
  if (subMenu) {
    return subMenu.some((item) => locationPathname === item.path);
  }
  return false;
};