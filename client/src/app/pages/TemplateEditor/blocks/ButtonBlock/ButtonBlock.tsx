import React, { FC } from 'react';

import { IButtonSettings } from './types';
import BlockItem from '../BlockItem';
import { IBlockProps } from '..';

const ButtonBlock: FC<IBlockProps<IButtonSettings>> = (props) => {
  const {
    settings: { padding, margin },
  } = props;
  return (
    <BlockItem
      blockName="Button"
      blockProps={props}
      styleSettings={{ ...(padding && { padding }), ...(margin && { margin }) }}
    >
      {props.children}
    </BlockItem>
  );
};

export default ButtonBlock;
