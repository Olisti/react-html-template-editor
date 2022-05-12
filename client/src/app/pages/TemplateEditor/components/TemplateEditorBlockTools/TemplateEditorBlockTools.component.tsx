import React, { useMemo } from 'react';

import { useEditor } from '../../providers/EditorProvider';
import { TemplateEditorToolItem } from './TemplateEditorToolItem.component';

export const TemplateEditorBlockTools = () => {
  const { selectedBlock } = useEditor();
  return useMemo(() => <TemplateEditorToolItem selectedBlock={selectedBlock} />, [selectedBlock]);
};
