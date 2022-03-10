import React from 'react';

import { IButtonSettings } from './types';
import ButtonBlockSettings from './ButtonBlockSettings';
import { IBlockProps } from '../../context/types';
import BlockItem from '../BlockItem';

const ButtonBlock = (props: IBlockProps<IButtonSettings>) => {
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

ButtonBlock.settings = ButtonBlockSettings;

export default ButtonBlock;
