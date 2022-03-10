import React, { VFC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { IBlockSettingsProps, IAnyBlockSettings } from '../..';

const PaddingControl: VFC<IBlockSettingsProps<IAnyBlockSettings>> = ({
  blockSettings,
  updateSettings,
}) => {
  return (
    <FormControl>
      <FormLabel>Padding</FormLabel>
      <Input
        size="sm"
        value={blockSettings?.padding || ''}
        onChange={(e) =>
          updateSettings({
            key: 'padding',
            value: e.currentTarget.value,
          })
        }
      />
    </FormControl>
  );
};

export default PaddingControl;
