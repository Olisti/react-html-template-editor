import { FC } from 'react';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

export interface IBlock<T = any> {
  item: FC<T>;
  settings: FC<T>;
  defaultSettings: IBlockSettings;
}

export interface IBlockSettings {
  props: any;
  children: any;
}

export type IBlockType = 'ContainerBlock' | 'ButtonBlock' | 'TextBlock' | 'ImageBlock';

export interface IBlockProps<S> {
  id: string;
  tag: string;
  key: string | number;
  attribs: { styleObject: any; [key: string]: string };
  settings: S;
  children?: React.ReactNode;
}

export interface IDragBlockInfo {
  name: string;
  type: IBlockType;
}
