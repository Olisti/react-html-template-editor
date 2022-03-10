import React, { Children } from 'react';

import { IContainerSettings } from './types';
import ContainerBlockSettings from './ContainerBlockSettings';
import { IBlockProps, IBlockType } from '../../context/types';
import BlockItem from '../BlockItem';
import BlockDropArea from '../BlockDropArea';

const ContainerBlock = (props: IBlockProps<IContainerSettings>) => {
  const accept: IBlockType[] = ['ButtonBlock'];
  return (
    <BlockItem
      blockName="Container"
      blockProps={props}
      styleSettings={{ padding: props.settings.padding, margin: props.settings.margin }}
    >
      {Children.map(props.children, (child, index) => (
        <>
          <BlockDropArea accept={accept} blockId={props.id} innerIndex={index} />
          {child}
          {Children.count(props.children) === index + 1 && (
            <BlockDropArea accept={accept} blockId={props.id} innerIndex={index + 1} />
          )}
        </>
      ))}
    </BlockItem>
  );
};

ContainerBlock.settings = ContainerBlockSettings;

export default ContainerBlock;
