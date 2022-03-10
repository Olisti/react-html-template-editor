import React, { FC } from 'react';

import { IButtonSettings } from './types';
import BlockItem from '../BlockItem';
import { IBlockProps } from '..';

const ButtonBlock: FC<IBlockProps<IButtonSettings>> = (props) => {
  return (
    <BlockItem
      blockName="Button"
      blockProps={props}
      styleSettings={{ padding: props.settings.padding || 0, margin: props.settings.margin || 0 }}
    >
      {props.children}
    </BlockItem>
  );
};

export default ButtonBlock;
