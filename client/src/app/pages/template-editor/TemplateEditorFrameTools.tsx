import { Box } from '@chakra-ui/react';
import React, { ReactNode, useMemo } from 'react';
import { useEditor } from './context/EditorProvider';
import { ISelectedBlock } from './context/types';

interface TemplateEditorFrameTools {
  children: ReactNode;
}

export default function TemplateEditorFrameTools({ children }: TemplateEditorFrameTools) {
  const { selectedBlock } = useEditor();
  // TODO: selectedBlock
  return useMemo(() => <Box position="relative">{children}</Box>, [selectedBlock]);
}
interface TemplateEditorFrameToolsMemo {
  selectedBlock: ISelectedBlock;
  children: ReactNode;
}
