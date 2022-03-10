import React, { Children, FC, memo } from 'react';

import { IButtonSettings } from './types';
import BlockItem from '../../components/BlockItem';
import { IBlockProps, getBlockCSSProperties } from '../..';

const ButtonBlock: FC<IBlockProps<IButtonSettings>> = (props) => {
  return (
    <BlockItem
      blockName="Button"
      blockProps={props}
      styleSettings={getBlockCSSProperties(props.settings)}
    >
      {Children.count(props.children) > 0 ? props.children : 'Button'}
    </BlockItem>
  );
};

export default memo(ButtonBlock);
