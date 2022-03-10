import React, { VFC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { IBlockSettingsProps, IAnyBlockSettings } from '../..';

const MarginControl: VFC<IBlockSettingsProps<IAnyBlockSettings>> = ({
  blockSettings,
  updateSettings,
}) => {
  return (
    <FormControl>
      <FormLabel>Margin</FormLabel>
      <Input
        size="sm"
        value={blockSettings?.margin || ''}
        onChange={(e) =>
          updateSettings({
            key: 'margin',
            value: e.currentTarget.value,
          })
        }
      />
    </FormControl>
  );
};

export default MarginControl;
