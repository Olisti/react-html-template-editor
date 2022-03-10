import React, { VFC } from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@chakra-ui/react';

import { IBlockDropAreaItemProps } from './types';
import { IDragBlockInfo } from '../..';

const BlockDropAreaItem: VFC<IBlockDropAreaItemProps> = ({
  accept,
  blockId,
  innerIndex,
  addBlock,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept,
    drop: (item: IDragBlockInfo) => addBlock({ blockId, blockType: item.type, innerIndex }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  const backgroundColor = isActive ? '#C6F6D5' : '#E2E8F0';

  if (!canDrop) return null;

  return (
    <Box ref={drop} style={{ backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a block here'}
    </Box>
  );
};

export default BlockDropAreaItem;
