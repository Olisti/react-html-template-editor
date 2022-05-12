import React, { SyntheticEvent, VFC, useCallback, useMemo } from 'react';
import { Link as ReachLink } from 'react-router-dom';

import { TEMPLATE_LIST_ROUTE } from '@app/index';
import { Button, Input, Stack } from '@chakra-ui/react';

import { useTemplate } from '../../providers/TemplateProvider';

export const TemplateEditorTools: VFC = () => {
  const { name, setName, onSave } = useTemplate();

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
