import { CSSProperties, ReactNode } from 'react';

import { IBlockProps } from '..';
import { ISelectBlockProps } from '../../context';

export interface IBlockItemProps<T> {
  blockName: string;
  blockProps: IBlockProps<T>;
  styleSettings?: CSSProperties;
  children: ReactNode;
}

export interface IBlockItemMemoProps<T = any> extends IBlockItemProps<T> {
  blockName: string;
  isPreview: boolean;
  isSelected: boolean;
  selectBlock: (data: ISelectBlockProps) => void;
}

export type ITagName = 'div';
