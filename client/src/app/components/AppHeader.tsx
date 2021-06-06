import React, { ReactNode } from 'react';
import logo from '@assets/logo.svg';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IAppHeaderProps {
  children?: ReactNode;
}

export default function AppHeader({ children }: IAppHeaderProps) {
  return (
    <header key="app-header">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="60px"
        padding="0 2em 0 1.25em"
        boxShadow="sm"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Link to="/">
          <Image src={logo} alt="logo" width="4em" height="4em" />
        </Link>
        <Link to="/">
          <Heading size="md" color="gray.700">
            HTML editor
          </Heading>
        </Link>
        <Box flex="1" />
        <Box>{children}</Box>
      </Flex>
    </header>
  );
}
