import * as React from 'react';

export interface TabsContextProps {
  setActiveItem?: any; // TODO add type
  defaultSelectedItem?: string | number;
  onClick?: (key: string | number, e: React.MouseEvent<HTMLDivElement>) => void;
  selectedItem?: string | number;
}

export const TabsContext = React.createContext<TabsContextProps>({});
