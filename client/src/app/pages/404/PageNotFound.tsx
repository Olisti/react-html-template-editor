import React from 'react';
import './PageNotFound.scss';
import logo from '@assets/logo.svg';
import AppHeader from '@/app/components/AppHeader';
import { Button, Flex, Text, Image } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export default function PageNotFound() {
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
}
