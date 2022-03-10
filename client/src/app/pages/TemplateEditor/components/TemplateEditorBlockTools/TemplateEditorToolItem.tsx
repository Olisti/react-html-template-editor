import React, { VFC } from 'react';
import { Box } from '@chakra-ui/react';

import { ITEM_HEIGHT } from './consts';
import { ITemplateEditorToolItemProps } from './types';

const TemplateEditorToolItem: VFC<ITemplateEditorToolItemProps> = ({ selectedBlock }) => {
  if (!selectedBlock?.rect) {
    return null;
  }

  const blockTop = selectedBlock.rect.top - ITEM_HEIGHT;
  const top = blockTop - ITEM_HEIGHT < 0 ? selectedBlock.rect.bottom : blockTop;
  return (
    <Box
      position="absolute"
      top={`${top}px`}
      left={selectedBlock.rect.left + 'px'}
      height={ITEM_HEIGHT + 'px'}
      paddingLeft="1"
      paddingRight="1"
      fontSize="small"
      lineHeight={ITEM_HEIGHT + 'px'}
      color="white"
      backgroundColor="blue.600"
    >
      {selectedBlock.blockName}
    </Box>
  );
};

export default TemplateEditorToolItem;
