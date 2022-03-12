import React, { useMemo } from 'react';

import TemplateEditorToolItem from './TemplateEditorToolItem';
import { useEditor } from '../../contexts/EditorContext';

const TemplateEditorBlockTools = () => {
  const { selectedBlock } = useEditor();
  return useMemo(() => <TemplateEditorToolItem selectedBlock={selectedBlock} />, [selectedBlock]);
};

export default TemplateEditorBlockTools;
