import { IEditorNode, IUpdateSettingsProps } from './context/types';
import React, { memo } from 'react';
import { blockSettings } from './blocks';
import { useEditor } from './context/EditorContext';

const BlockSettings = memo(
  ({
    selectedBlock,
    updateSettings,
  }: {
    selectedBlock: IEditorNode | null;
    updateSettings: (props: IUpdateSettingsProps) => void;
  }) => {
    if (!selectedBlock || !selectedBlock.blockName) return null;
    const Settings = blockSettings[selectedBlock.blockName];
    return <Settings selectedBlock={selectedBlock} updateSettings={updateSettings} />;
  }
);

export default function TemplateEditorSettings() {
  const { nodes, selectedBlockId, updateSettings } = useEditor();
  return (
    <BlockSettings
      selectedBlock={selectedBlockId ? nodes[selectedBlockId] : null}
      updateSettings={updateSettings}
    />
  );
}
