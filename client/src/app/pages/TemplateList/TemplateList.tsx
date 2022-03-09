import React, { VFC } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';

import Table from '@/app/components/Table';
import AppHeader from '@/app/components/AppHeader';
import { TEMPLATE_CREATE_ROUTE } from '@/app/Router';

const TemplateList: VFC = () => {
  return (
    <>
      <AppHeader />
      <Box flex="1" padding="1em 2em" bgColor="gray.50">
        <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={6}>
          <InputGroup width="20em">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input placeholder="Search" type="text" bgColor="white" />
          </InputGroup>

          <Button
            as={ReachLink}
            to={TEMPLATE_CREATE_ROUTE}
            leftIcon={<AddIcon />}
            colorScheme="blue"
          >
            Create new
          </Button>
        </Box>

        <Table />
      </Box>
    </>
  );
};

export default TemplateList;
