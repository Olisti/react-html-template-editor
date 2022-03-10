import { FC } from 'react';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

export interface IBlock<T = any> {
  item: FC<T>;
  settings: FC<T>;
  defaultSettings: { props: any; children: any };
}
