import { IBlockType } from '../..';
import { IAddBlockProps } from '../../../providers/EditorProvider';

export interface IBlockDropAreaProps extends Omit<IAddBlockProps, 'blockType'> {
  accept: IBlockType[];
}

export interface IBlockDropAreaItemProps extends IBlockDropAreaProps {
  addBlock: (data: IAddBlockProps) => void;
}
