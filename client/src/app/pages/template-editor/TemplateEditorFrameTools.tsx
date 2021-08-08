import { Box, Button, Heading } from '@chakra-ui/react';
import React, { memo, ReactNode } from 'react';
import { useEditor } from './context/EditorContext';
import { ISelectedBlock } from './context/types';

interface TemplateEditorFrameTools {
  children: ReactNode;
}

export default function TemplateEditorFrameTools({ children }: TemplateEditorFrameTools) {
  const { selectedBlock } = useEditor();
  return (
    <TemplateEditorFrameToolsMemo selectedBlock={selectedBlock}>
      {children}
    </TemplateEditorFrameToolsMemo>
  );
}
interface TemplateEditorFrameToolsMemo {
  selectedBlock: ISelectedBlock;
  children: ReactNode;
}

const TemplateEditorFrameToolsMemo = memo(
  ({ selectedBlock, children }: TemplateEditorFrameToolsMemo) => {
    // TODO: selectedBlock
    return <Box position="relative">{children}</Box>;
  }
);
