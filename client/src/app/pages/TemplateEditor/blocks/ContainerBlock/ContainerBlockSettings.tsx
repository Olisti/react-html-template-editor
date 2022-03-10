import React, { VFC } from 'react';
import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

import { IContainerSettings } from './types';
import { IBlockSettingsProps } from '..';

const ContainerBlockSettings: VFC<IBlockSettingsProps<IContainerSettings>> = ({
  blockSettings,
  updateSettings,
}) => {
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
};

export default ContainerBlockSettings;