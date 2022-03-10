import React, { Children, FC, memo } from 'react';

import { IContainerSettings } from './types';
import BlockItem from '../../components/BlockItem';
import BlockDropArea from '../../components/BlockDropArea';
import { IBlockType, IBlockProps, getBlockCSSProperties } from '../..';

const ContainerBlock: FC<IBlockProps<IContainerSettings>> = (props) => {
  const accept: IBlockType[] = ['ButtonBlock'];

  return (
    <BlockItem
      blockName="Container"
      blockProps={props}
      styleSettings={getBlockCSSProperties(props.settings)}
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

export default memo(ContainerBlock);
