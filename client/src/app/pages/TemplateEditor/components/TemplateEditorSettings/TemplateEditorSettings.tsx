import React, { useCallback, useMemo, VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { IUpdateSettingsProps } from '../../context/types';
import { useEditor } from '../../context/EditorProvider';
import { EDITOR_BLOCKS } from '../../blocks';

const TemplateEditorSettings: VFC = () => {
  const { nodes, selectedBlock, updateSettings } = useEditor();
  const selectedNode = useMemo(
    () => (selectedBlock?.id ? nodes[selectedBlock.id] : null),
    [nodes, selectedBlock]
  );

  const Settings = useMemo(
    () => (selectedNode?.blockName ? EDITOR_BLOCKS[selectedNode.blockName].settings : null),
    [selectedNode?.blockName]
  );

  const updateSettingsById = useCallback(
    ({ key, value }: IUpdateSettingsProps) =>
      updateSettings({ id: selectedNode?.props?.id || '', key, value }),
    [selectedNode, updateSettings]
  );

  return useMemo(
    () => (
      <Box padding="0.75em 1em">
        <Heading
          size="md"
          color="gray.500"
          marginBottom="0.3em"
          textAlign="center"
          fontWeight="500"
        >
          Settings
        </Heading>

        {!selectedNode || !Settings ? (
          <Box>Click on a component to start editing.</Box>
        ) : (
          <Settings
            blockSettings={selectedNode.props?.settings}
            updateSettings={updateSettingsById}
          />
        )}
      </Box>
    ),
    [selectedNode, Settings, updateSettingsById]
  );
};

export default TemplateEditorSettings;
