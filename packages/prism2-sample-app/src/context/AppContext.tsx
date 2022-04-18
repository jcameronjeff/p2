import { createContext } from 'react';

export const AppContext = createContext<{ enabled: boolean, toggle: Function }>({ enabled: false, toggle: () => {} });

export default AppContext;
