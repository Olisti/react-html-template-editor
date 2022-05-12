import React, { VFC } from 'react';
import { Link as ReachLink } from 'react-router-dom';

import logo from '@assets/logo.svg';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { AppHeader } from '@components/AppHeader';

import './PageNotFound.styles.scss';

export const PageNotFound: VFC = () => {
  return (
    <>
      <AppHeader />
      <Flex
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="8em"
      >
        <Flex alignItems="flex-end" marginBottom={4} position="relative">
          <Image
            src={logo}
            className="not-found-logo"
            alt="logo"
            position="absolute"
            top="-5em"
            left="-20em"
            width="30em"
            height="30em"
            maxWidth="initial"
          />
          <Text fontSize="10em" color="gray.700" zIndex="1">
            404
          </Text>
        </Flex>
        <Button as={ReachLink} to="/" minWidth="10em">
          Home page
        </Button>
      </Flex>
    </>
  );
};
