import { Box } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useEditor } from './context/EditorProvider';
import { ISelectedBlock } from './context/types';

export default function TemplateEditorBlockTools() {
  const { selectedBlock } = useEditor();
  return useMemo(() => <TemplateEditorToolItem selectedBlock={selectedBlock} />, [selectedBlock]);
}

const itemHeight = 24;

const TemplateEditorToolItem = ({ selectedBlock }: { selectedBlock: ISelectedBlock }) => {
  if (!selectedBlock?.rect) return null;
  const blockTop = selectedBlock.rect.top - itemHeight;
  const top = blockTop - itemHeight < 0 ? selectedBlock.rect.bottom : blockTop;
  return (
    <Box
      position="absolute"
      top={`${top}px`}
      left={selectedBlock.rect.left + 'px'}
      height={itemHeight + 'px'}
      paddingLeft="1"
      paddingRight="1"
      fontSize="small"
      lineHeight={itemHeight + 'px'}
      color="white"
      backgroundColor="blue.600"
    >
      {selectedBlock.blockName}
    </Box>
  );
};
