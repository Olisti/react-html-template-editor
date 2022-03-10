import { Dispatch, SetStateAction } from 'react';

import { IBlockType } from '../../context/types';

export interface ITemplateEditorBlocksProps {
  setDragging: Dispatch<SetStateAction<boolean>>;
}

export interface ITemplateEditorBlockProps {
  name: string;
  type: IBlockType;
  setDragging: Dispatch<SetStateAction<boolean>>;
}
