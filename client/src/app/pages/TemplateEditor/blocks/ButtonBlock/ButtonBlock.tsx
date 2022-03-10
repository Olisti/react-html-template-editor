import React, { VFC } from 'react';

import { IButtonSettings } from './types';
import BlockItem from '../BlockItem';
import { IBlockProps } from '..';

const ButtonBlock: VFC<IBlockProps<IButtonSettings>> = (props) => {
  return (
    <BlockItem
      blockName="Button"
      blockProps={props}
      styleSettings={{ padding: props.settings.padding, margin: props.settings.margin }}
    >
      {props.children}
    </BlockItem>
  );
};

export default ButtonBlock;
