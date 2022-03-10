import React, { SyntheticEvent, useCallback, useMemo, VFC } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Button, Input, Stack } from '@chakra-ui/react';

import { TEMPLATE_LIST_ROUTE } from '@/app/Router';
import { useEditor } from '../../context';

const TemplateEditorTools: VFC = () => {
  const { name, setName, onSave } = useEditor();

  const changeName = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => setName(e.currentTarget?.value),
    [setName]
  );

  return useMemo(
    () => (
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
    ),
    [name, changeName, onSave]
  );
};

export default TemplateEditorTools;
