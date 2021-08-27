import { IUpdateSettingsProps } from './context/types';
import React, { useCallback, useMemo } from 'react';
import { blocks } from './blocks';
import { useEditor } from './context/EditorProvider';
import { Box, Heading } from '@chakra-ui/react';

export default function TemplateEditorSettings() {
  const { nodes, selectedBlock, updateSettings } = useEditor();
  const selectedNode = useMemo(
    () => (selectedBlock?.id ? nodes[selectedBlock.id] : null),
    [nodes, selectedBlock]
  );

  const Settings = useMemo(
    () => (selectedNode?.blockName ? blocks[selectedNode.blockName].settings : null),
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
}
