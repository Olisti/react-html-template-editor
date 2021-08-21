import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import { IBlockSettingsProps } from '..';
import { IBlockProps } from '../../context/types';
import BlockItem from '../BlockItem';

interface IContainerSettings {
  margin: string;
  padding: string;
}

export default function ContainerBlock(props: IBlockProps<IContainerSettings>) {
  return (
    <BlockItem
      blockName="Container"
      blockProps={props}
      styleSettings={{ padding: props.settings.padding, margin: props.settings.margin }}
    >
      {props.children}
    </BlockItem>
  );
}

ContainerBlock.settings = ContainerBlockSettings;

function ContainerBlockSettings({
  blockSettings,
  updateSettings,
}: IBlockSettingsProps<IContainerSettings>) {
  return (
    <Stack spacing={3}>
      <FormControl>
        <FormLabel>Padding</FormLabel>
        <Input
          size="sm"
          value={blockSettings.padding || ''}
          onChange={(e) =>
            updateSettings({
              key: 'padding',
              value: e.currentTarget.value,
            })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Margin</FormLabel>
        <Input
          size="sm"
          value={blockSettings.margin || ''}
          onChange={(e) =>
            updateSettings({
              key: 'margin',
              value: e.currentTarget.value,
            })
          }
        />
      </FormControl>
    </Stack>
  );
}
