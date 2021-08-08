import React, { useMemo, useCallback, SyntheticEvent } from 'react';
import { useEditor } from './context/EditorProvider';
import { Textarea } from '@chakra-ui/textarea';

export default function TemplateEditorCode() {
  const { html, setHtml } = useEditor();
  const changeHtml = useCallback(
    (e: SyntheticEvent<HTMLTextAreaElement>) => setHtml(e.currentTarget?.value),
    [setHtml]
  );

  return useMemo(
    () => <Textarea value={html} onChange={changeHtml} style={{ height: '200px' }} />,
    [html, changeHtml]
  );
}
