import { IEditorNode, IUpdateSettingsProps } from './context/types';
import React, { memo, useCallback } from 'react';
import { blockSettings } from './blocks';
import { useEditor } from './context/EditorContext';
import { Box, Heading } from '@chakra-ui/react';

export default function TemplateEditorSettings() {
  const { nodes, selectedBlock, updateSettings } = useEditor();

  return (
    <Box padding="0.75em 1em">
      {/* <Heading size="sm" color="gray.500" marginBottom="0.3em" textAlign="center"> */}
      <Heading size="md" color="gray.500" marginBottom="0.3em" textAlign="center" fontWeight="500">
        Settings
      </Heading>

      <BlockSettings
        selectedNode={selectedBlock?.id ? nodes[selectedBlock.id] : null}
        updateSettings={updateSettings}
      />
    </Box>
  );
}

const BlockSettings = memo(
  ({
    selectedNode,
    updateSettings,
  }: {
    selectedNode: IEditorNode | null;
    updateSettings: (props: IUpdateSettingsProps) => void;
  }) => {
    const updateSettingsById = useCallback(
      ({ key, value }: IUpdateSettingsProps) =>
        updateSettings({ id: selectedNode?.props?.id || '', key, value }),
      [selectedNode, updateSettings]
    );
    if (!selectedNode || !selectedNode.blockName) return null;
    const Settings = blockSettings[selectedNode.blockName];
    return (
      <Settings blockSettings={selectedNode.props?.settings} updateSettings={updateSettingsById} />
    );
  }
);
