import { IMenuItem, IQuote, Status } from "../interface";

export const isActive = (locationPathname: string, path: string | undefined, subMenu: IMenuItem[] | undefined): boolean => {
  if (path && locationPathname === path) {
    return true;
  }
  if (subMenu) {
    return subMenu.some((item) => locationPathname === item.path);
  }
  return false;
};

export const getStatusBadgeStyles = (status: Status): string => {
  switch (status) {
    case 'approved':
      return 'bg-green-500 text-white'
    case 'rejected':
      return 'bg-red-500 text-white'
    case 'awaiting':
      return 'bg-yellow-500 text-white'
  }
}

export const getQuote = (quotes: IQuote[], refNo: string): IQuote | undefined => {
  return quotes?.find((quote: IQuote) => quote?.refno === refNo);
}