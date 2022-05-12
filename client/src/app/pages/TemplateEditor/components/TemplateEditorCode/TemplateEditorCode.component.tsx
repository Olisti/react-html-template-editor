import React, { ChangeEventHandler, VFC, useCallback, useMemo } from 'react';

import { Textarea } from '@chakra-ui/textarea';

import { useEditor } from '../../providers/EditorProvider';
import { useTemplate } from '../../providers/TemplateProvider';

export const TemplateEditorCode: VFC = () => {
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
