import { createContext } from 'react';

export const AppContext = createContext<{ enabled: boolean }>({ enabled: false });

export default AppContext;
