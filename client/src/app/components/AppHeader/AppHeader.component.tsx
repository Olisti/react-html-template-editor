import React, { FC } from 'react';
import { Link as ReachLink } from 'react-router-dom';

import logo from '@assets/logo.svg';
import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';

export const AppHeader: FC = ({ children }) => {
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
        <Link as={ReachLink} to="/">
          <Flex alignItems="center" paddingRight="1em">
            <Image src={logo} alt="logo" width="3.5em" height="3.5em" />
            <Heading size="md" color="gray.700">
              HTML editor
            </Heading>
          </Flex>
        </Link>
        <Box flex="1" />
        <Box>{children}</Box>
      </Flex>
    </header>
  );
};
