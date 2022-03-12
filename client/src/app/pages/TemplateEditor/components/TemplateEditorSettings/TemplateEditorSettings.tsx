import React, { useCallback, useMemo, VFC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { EDITOR_BLOCKS } from '../../blocks';
import { useEditor, IUpdateBlockProps } from '../../contexts/EditorContext';
import { useTemplate } from '../../contexts/TemplateContext';

const TemplateEditorSettings: VFC = () => {
  const { nodes, selectedBlock, updateBlock } = useEditor();
  const { setCodeChanged } = useTemplate();
  const selectedNode = useMemo(
    () => (selectedBlock?.id ? nodes[selectedBlock.id] : null),
    [nodes, selectedBlock]
  );

  const Settings = useMemo(
    () => (selectedNode?.blockName ? EDITOR_BLOCKS[selectedNode.blockName].settings : null),
    [selectedNode?.blockName]
  );

  const updateSettingsById = useCallback(
    ({ key, value }: IUpdateBlockProps) => {
      if (selectedNode?.props?.id) {
        updateBlock({ id: selectedNode?.props?.id, key, value });
        setCodeChanged();
      }
    },
    [selectedNode, updateBlock, setCodeChanged]
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
