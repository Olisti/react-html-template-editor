import React, { ReactNode } from 'react';
import logo from '@assets/logo.svg';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IAppHeaderProps {
  children?: ReactNode;
}

export default function AppHeader({ children }: IAppHeaderProps) {
  return (
    <header key="app-header">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="60px"
        borderBottom="1px"
        borderColor="gray.200"
        padding="0 2em 0 1.25em"
      >
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" width="60" height="60" />
        </Link>
        <Link to="/">
          <Heading size="md" color="gray.700">
            HTML editor
          </Heading>
        </Link>
        <span style={{ flex: 1 }} />
        <div>{children}</div>
      </Box>
    </header>
  );
}
