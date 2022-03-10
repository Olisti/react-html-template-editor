import React, { useMemo, useCallback, VFC, ChangeEventHandler } from 'react';
import { Textarea } from '@chakra-ui/textarea';

import { useEditor } from '../../context';

const TemplateEditorCode: VFC = () => {
  const { html, setHtml } = useEditor();
  const changeHtml: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => setHtml(e.currentTarget?.value),
    [setHtml]
  );

  return useMemo(
    () => <Textarea value={html} onChange={changeHtml} style={{ height: '200px' }} />,
    [html, changeHtml]
  );
};

export default TemplateEditorCode;
