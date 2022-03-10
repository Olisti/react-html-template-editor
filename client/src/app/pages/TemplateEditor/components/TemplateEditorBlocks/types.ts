import { Dispatch, SetStateAction } from 'react';

import { IBlockType } from '../../blocks';

export interface ITemplateEditorBlocksProps {
  setDragging: Dispatch<SetStateAction<boolean>>;
}

export interface ITemplateEditorBlockProps {
  name: string;
  type: IBlockType;
  setDragging: Dispatch<SetStateAction<boolean>>;
}
