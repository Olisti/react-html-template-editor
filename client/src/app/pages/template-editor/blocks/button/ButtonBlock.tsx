import React from 'react';
import { IBlockProps, IEditorNode, IUpdateSettingsProps } from '../../context/types';
import BlockItem from '../BlockItem';

interface IButtonSettings {
  margin: string;
  padding: string;
}

export default function ButtonBlock(props: IBlockProps<IButtonSettings>) {
  return (
    <BlockItem
      blockProps={props}
      styleSettings={{ padding: props.settings.padding, margin: props.settings.margin }}
    >
      {props.children}
    </BlockItem>
  );
}

ButtonBlock.settings = ButtonBlockSettings;

function ButtonBlockSettings({
  selectedBlock,
  updateSettings,
}: {
  selectedBlock: IEditorNode;
  updateSettings: (props: IUpdateSettingsProps) => void;
}) {
  return (
    <div>
      <input
        type="text"
        value={selectedBlock.props.settings.padding || ''}
        onChange={(e) =>
          updateSettings({
            id: selectedBlock.props.id,
            key: 'padding',
            value: e.currentTarget.value,
          })
        }
      />
    </div>
  );
}
