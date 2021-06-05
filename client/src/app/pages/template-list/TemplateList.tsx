import React from 'react';
import './TemplateList.css';
import AppHeader from '@/app/components/AppHeader';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function TemplateList() {
  return (
    <>
      <AppHeader />
      <Box flex="1" padding="1em 2em">
        TemplateList
        <br />
        <Link to="/template/editor">Create</Link>
      </Box>
    </>
  );
}
