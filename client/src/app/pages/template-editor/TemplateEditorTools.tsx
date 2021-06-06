import React, { memo, SyntheticEvent } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { TEMPLATE_LIST_ROUTE } from '@/app/Router';
import { useEditor } from './context/EditorContext';

const TemplateEditorToolsMemo = memo(
  ({
    name,
    setName,
    onSave,
  }: {
    name: string;
    setName: (v: string) => void;
    onSave: () => void;
  }) => {
    const changeName = (e: SyntheticEvent<HTMLInputElement>) => setName(e.currentTarget?.value);

    return (
      <Stack spacing={4} direction="row" align="center">
        <Input placeholder="Name" size="sm" value={name} onChange={changeName} />
        {/* TODO: confirm dialog */}
        <Button as={ReachLink} to={TEMPLATE_LIST_ROUTE} size="sm" minWidth="5em">
          Back
        </Button>
        <Button colorScheme="blue" size="sm" minWidth="5em" onClick={onSave}>
          Save
        </Button>
      </Stack>
    );
  }
);

export default function TemplateEditorTools() {
  const { name, setName, onSave } = useEditor();
  return <TemplateEditorToolsMemo name={name} setName={setName} onSave={onSave} />;
}
