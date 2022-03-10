import React, { Children, FC } from 'react';

import { IContainerSettings } from './types';
import BlockItem from '../BlockItem';
import BlockDropArea from '../BlockDropArea';
import { IBlockType, IBlockProps } from '..';

const ContainerBlock: FC<IBlockProps<IContainerSettings>> = (props) => {
  const accept: IBlockType[] = ['ButtonBlock'];
  const {
    settings: { padding, margin },
  } = props;
  return (
    <BlockItem
      blockName="Container"
      blockProps={props}
      styleSettings={{ ...(padding && { padding }), ...(margin && { margin }) }}
    >
      {Children.map(props.children, (child, index) => (
        <>
          <BlockDropArea accept={accept} blockId={props.id || ''} innerIndex={index} />
          {child}
          {Children.count(props.children) === index + 1 && (
            <BlockDropArea accept={accept} blockId={props.id || ''} innerIndex={index + 1} />
          )}
        </>
      ))}
    </BlockItem>
  );
};

export default ContainerBlock;
