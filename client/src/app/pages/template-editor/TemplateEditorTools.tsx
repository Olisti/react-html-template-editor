import React, { SyntheticEvent, useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { TEMPLATE_LIST_ROUTE } from '@/app/Router';

export default function TemplateEditorTools() {
  const [name, setName] = useState<string>('');

  const changeName = (e: SyntheticEvent<HTMLInputElement>) => setName(e.currentTarget?.value);

  return (
    <Stack spacing={4} direction="row" align="center">
      <Input placeholder="Name" size="sm" value={name} onChange={changeName} />
      <Button as={ReachLink} to={TEMPLATE_LIST_ROUTE} size="sm" minWidth="5em">
        Back
      </Button>
      <Button colorScheme="blue" size="sm" minWidth="5em">
        Save
      </Button>
    </Stack>
  );
}
