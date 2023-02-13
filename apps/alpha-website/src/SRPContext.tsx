import { createContext } from 'react';
import { SingleVehicleProps } from './components/SingleVehicle/SingleVehicleDetail';
export interface SRPContextI {
  data: SingleVehicleProps[],
  itemCount: number,
  workbookItems: string[],
  hiddenItems: string[],
  toggleHideItem: (arg0: string) => void,
  toggleWorkbookItems: (arg0: string) => void
  itemIndex: number,
  setItemIndex: (arg0: number) => void
  pageSize: number,
  setPageSize: (arg0: number) => void,
  displayMode: 'list' | 'detail' | 'table',
}
export const SRPContext = createContext<SRPContextI>({
  data: [],
  itemCount: 0,
  workbookItems: [],
  hiddenItems: [],
  toggleWorkbookItems: () => {},
  toggleHideItem: () => {},
  itemIndex: 0,
  setItemIndex: () => {},
  pageSize: 5,
  displayMode: 'list',
  setPageSize: () => {},
});
