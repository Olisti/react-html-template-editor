import { IBlockType } from '../..';
import { IAddBlockProps } from '../../../contexts/EditorContext';

export interface IBlockDropAreaProps extends Omit<IAddBlockProps, 'blockType'> {
  accept: IBlockType[];
}

export interface IBlockDropAreaItemProps extends IBlockDropAreaProps {
  addBlock: (data: IAddBlockProps) => void;
}
