import { Dispatch, SetStateAction } from 'react';

import { IBlockType } from '../../blocks';

export interface ITemplateEditorBlockProps {
  name: string;
  type: IBlockType;
  setDragging: Dispatch<SetStateAction<boolean>>;
}
