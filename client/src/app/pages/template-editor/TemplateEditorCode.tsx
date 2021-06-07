import React, { memo, SyntheticEvent } from 'react';
import { useEditor } from './context/EditorContext';
import { Textarea } from '@chakra-ui/textarea';

const TemplateEditorCodeMemo = memo(
  ({ html, setHtml }: { html: string; setHtml: (v: string) => void }) => {
    const changeHtml = (e: SyntheticEvent<HTMLTextAreaElement>) => setHtml(e.currentTarget?.value);

    return <Textarea value={html} onChange={changeHtml} style={{ height: '200px' }} />;
  }
);

export default function TemplateEditorCode() {
  const { html, setHtml } = useEditor();
  return <TemplateEditorCodeMemo html={html} setHtml={setHtml} />;
}
