import { createContext } from 'react';

export interface SRPContextI {
  workbookItems: string[],
  hiddenItems: string[],
  toggleHideItem: (arg0: string) => void,
  toggleWorkbookItems: (arg0: string) => void
}
export const SRPContext = createContext<SRPContextI>({
  workbookItems: [],
  hiddenItems: [],
  toggleWorkbookItems: () => {},
  toggleHideItem: () => {},
});
