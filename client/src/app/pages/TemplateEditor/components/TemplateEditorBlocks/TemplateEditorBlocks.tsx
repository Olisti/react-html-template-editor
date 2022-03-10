import React, { VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { ITemplateEditorBlocksProps } from './types';
import TemplateEditorBlock from './TemplateEditorBlock';

const TemplateEditorBlocks: VFC<ITemplateEditorBlocksProps> = ({ setDragging }) => {
  return (
    <Box padding="0.75em 1em">
      <Heading size="md" color="gray.500" marginBottom="0.3em" textAlign="center" fontWeight="500">
        Blocks
      </Heading>
      <TemplateEditorBlock name="Container" type="ContainerBlock" setDragging={setDragging} />
      <TemplateEditorBlock name="Button" type="ButtonBlock" setDragging={setDragging} />
      <TemplateEditorBlock name="Text" type="TextBlock" setDragging={setDragging} />
      <TemplateEditorBlock name="Image" type="ImageBlock" setDragging={setDragging} />
    </Box>
  );
};

export default TemplateEditorBlocks;
