import React, { VFC } from 'react';
import { Box, Table as ChakraTable, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Table: VFC = () => {
  return (
    <Box bgColor="white" border="1px" borderColor="gray.200" borderRadius="md">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td border="none">yards</Td>
            <Td border="none">metres (m)</Td>
            <Td border="none" isNumeric>
              0.91444
            </Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </Box>
  );
};

export default Table;
