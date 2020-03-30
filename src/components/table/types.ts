import * as React from 'react';

export type Justify = 'flex-start' | 'center' | 'flex-end';

export interface ColumnProps {
  key: string | number;
  title: React.ReactNode;
  dataIndex?: string;
  render?: (data: any) => React.ReactNode;
  justify?: Justify;
  width?: number;
}
