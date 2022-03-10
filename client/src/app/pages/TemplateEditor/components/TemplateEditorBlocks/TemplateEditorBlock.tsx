import React, { FC, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { Button } from '@chakra-ui/react';

import { ITemplateEditorBlockProps } from './types';
import { IDragBlockInfo } from '../../blocks';

const TemplateEditorBlock: FC<ITemplateEditorBlockProps> = ({ name, type, setDragging }) => {
  // TODO: drag preview https://react-dnd.github.io/react-dnd/docs/api/use-drag
  const [collected, drag] = useDrag({
    type,
    item: { name, type } as IDragBlockInfo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setDragging(collected.isDragging);
  }, [collected.isDragging, setDragging]);

  return (
    <Button ref={drag} colorScheme="gray" variant="ghost" width="100%">
      {name}
    </Button>
  );
};

export default TemplateEditorBlock;
