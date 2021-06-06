import React from 'react';
import AppHeader from '@/app/components/AppHeader';
import { Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Table from '@/app/components/Table';

export default function TemplateList() {
  return (
    <>
      <AppHeader />
      <Box flex="1" padding="1em 2em" bgColor="gray.50">
        <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={6}>
          <InputGroup width="20em">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input placeholder="Search" type="text" bgColor="white" />
          </InputGroup>

          <Link to="/template/editor">
            <Button leftIcon={<AddIcon />} colorScheme="blue">
              Create new
            </Button>
          </Link>
        </Box>

        <Table />
      </Box>
    </>
  );
}
