import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { Children } from 'react';
import { IBlockSettingsProps } from '..';
import { IBlockProps, IBlockType } from '../../context/types';
import BlockItem from '../BlockItem';
import DropArea from '../DropArea';

interface IContainerSettings {
  margin: string;
  padding: string;
}

export default function ContainerBlock(props: IBlockProps<IContainerSettings>) {
  const accept: IBlockType[] = ['ButtonBlock'];
  return (
    <BlockItem
      blockName="Container"
      blockProps={props}
      styleSettings={{ padding: props.settings.padding, margin: props.settings.margin }}
    >
      {Children.map(props.children, (child, index) => (
        <>
          <DropArea accept={accept} blockId={props.id} innerIndex={index} />
          {child}
          {Children.count(props.children) === index + 1 && (
            <DropArea accept={accept} blockId={props.id} innerIndex={index + 1} />
          )}
        </>
      ))}
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
