import { Box } from '@chakra-ui/react';
import React from 'react';
import { useDrop } from 'react-dnd';
import { useEditor } from '../context/EditorProvider';
import { IAddBlockProps, IBlockType, IDragBlockInfo } from '../context/types';

interface IDropAreaProps extends Omit<IAddBlockProps, 'blockType'> {
  accept: IBlockType[];
}

export default function DropArea(props: IDropAreaProps) {
  const { isPreview, addBlock } = useEditor();
  if (!isPreview) return null;
  return <DropAreaItem {...props} addBlock={addBlock} />;
}

const DropAreaItem = ({
  accept,
  blockId,
  innerIndex,
  addBlock,
}: IDropAreaProps & { addBlock: (data: IAddBlockProps) => void }) => {
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
