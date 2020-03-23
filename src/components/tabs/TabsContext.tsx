import * as React from 'react';

import { ActiveItem } from './types';

export interface TabsContextProps {
  setActiveItem?: any;
  defaultSelectedItem?: string | number;
  onClick?: (key: string | number, e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TabsContext = React.createContext<TabsContextProps>({});
