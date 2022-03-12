import React, { useMemo, useCallback, VFC, ChangeEventHandler } from 'react';
import { Textarea } from '@chakra-ui/textarea';

import { useEditor } from '../../contexts/EditorContext';
import { useTemplate } from '../../contexts/TemplateContext';

const TemplateEditorCode: VFC = () => {
  const { updateNodes } = useEditor();
  const { html, setHtml } = useTemplate();
  const changeHtml: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      const newHtml = e.currentTarget?.value;
      setHtml(newHtml);
      updateNodes(newHtml);
    },
    [setHtml, updateNodes]
  );

  return useMemo(
    () => <Textarea value={html} onChange={changeHtml} style={{ height: '200px' }} />,
    [html, changeHtml]
  );
};

export default TemplateEditorCode;
