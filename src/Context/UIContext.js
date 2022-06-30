import { createContext, useContext } from 'react';

export const UIContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: (sidebarOpen) => {},
});
export const useUI = () => useContext(UIContext);
