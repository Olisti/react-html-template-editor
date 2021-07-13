import { IEditorNode, IUpdateSettingsProps } from './context/types';
import React, { memo, useCallback } from 'react';
import { blockSettings } from './blocks';
import { useEditor } from './context/EditorContext';
import { Box, Heading } from '@chakra-ui/react';

const BlockSettings = memo(
  ({
    selectedBlock,
    updateSettings,
  }: {
    selectedBlock: IEditorNode | null;
    updateSettings: (props: IUpdateSettingsProps) => void;
  }) => {
    const updateSettingsById = useCallback(
      ({ key, value }: IUpdateSettingsProps) =>
        updateSettings({ id: selectedBlock?.props?.id || '', key, value }),
      [selectedBlock, updateSettings]
    );
    if (!selectedBlock || !selectedBlock.blockName) return null;
    const Settings = blockSettings[selectedBlock.blockName];
    return (
      <Settings blockSettings={selectedBlock.props?.settings} updateSettings={updateSettingsById} />
    );
  }
);

export default function TemplateEditorSettings() {
  const { nodes, selectedBlockId, updateSettings } = useEditor();

  return (
    <Box padding="0.75em 1em">
      {/* <Heading size="sm" color="gray.500" marginBottom="0.3em" textAlign="center"> */}
      <Heading size="md" color="gray.500" marginBottom="0.3em" textAlign="center" fontWeight="500">
        Settings
      </Heading>

      <BlockSettings
        selectedBlock={selectedBlockId ? nodes[selectedBlockId] : null}
        updateSettings={updateSettings}
      />
    </Box>
  );
}
