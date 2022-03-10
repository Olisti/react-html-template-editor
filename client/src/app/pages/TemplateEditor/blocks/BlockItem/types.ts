import { IBlockProps, ISelectBlockProps } from '../../context/types';

export interface IBlockItemProps<T> {
  blockName: string;
  blockProps: IBlockProps<T>;
  styleSettings?: React.CSSProperties;
  children: React.ReactNode;
}

export interface IBlockItemMemoProps<T = any> extends IBlockItemProps<T> {
  blockName: string;
  isPreview: boolean;
  isSelected: boolean;
  selectBlock: (data: ISelectBlockProps) => void;
}
