import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

export default function TemplateEditorBlocks() {
  return (
    <Box padding="0.75em 1em">
      {/* <Heading size="sm" color="gray.500" marginBottom="0.3em" textAlign="center"> */}
      <Heading size="md" color="gray.500" marginBottom="0.3em" textAlign="center" fontWeight="500">
        Blocks
      </Heading>
      <Button colorScheme="gray" variant="ghost" width="100%">
        Button
      </Button>
      <Button colorScheme="gray" variant="ghost" width="100%">
        Text
      </Button>
    </Box>
  );
}
