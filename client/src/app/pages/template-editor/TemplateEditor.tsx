import React from 'react';
import AppHeader from '@/app/components/AppHeader';
import { Button, Grid, GridItem, Input, Stack } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { TEMPLATE_LIST_ROUTE } from '@/app/Router';

export default function TemplateEditor() {
  return (
    <>
      <AppHeader>
        <Stack spacing={4} direction="row" align="center">
          <Input placeholder="Name" size="sm" />
          <Button
            as={ReachLink}
            to={TEMPLATE_LIST_ROUTE}
            colorScheme="gray"
            size="sm"
            minWidth="5em"
          >
            Back
          </Button>
          <Button colorScheme="blue" size="sm" minWidth="5em">
            Save
          </Button>
        </Stack>
      </AppHeader>
      <Grid flex="1" templateColumns="10em auto 10em">
        <GridItem bg="gray.50" borderRight="1px" borderColor="gray.200">
          Blocks
        </GridItem>
        <GridItem>Content</GridItem>
        <GridItem bg="gray.50" borderLeft="1px" borderColor="gray.200">
          Settings
        </GridItem>
      </Grid>
    </>
  );
}
