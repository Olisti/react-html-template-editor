import { FC } from 'react';
import { IButtonSettings } from './items/ButtonBlock';
import { IContainerSettings } from './items/ContainerBlock';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

export interface IBlock<T = any> {
  item: FC<T>;
  settings: FC<T>;
  defaultSettings: IBlockSettings<T>;
}

export interface IBlockSettings<T> {
  props: {
    id: string;
    key: number | string;
    tag?: string;
    attribs?: { 'data-block'?: 'button' | 'container'; class?: string; styleObject?: any };
    settings: T;
  };
  children: any;
}
export type IBlockProps<S> = IBlockSettings<S>['props'];

export type IBlockType = 'ContainerBlock' | 'ButtonBlock' | 'TextBlock' | 'ImageBlock';

export interface IDragBlockInfo {
  name: string;
  type: IBlockType;
}

export type IAnyBlockSettings = IButtonSettings | IContainerSettings;
