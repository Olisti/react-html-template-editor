import React, { VFC } from 'react';
import { Stack } from '@chakra-ui/react';

import { IButtonSettings } from './types';
import { IBlockSettingsProps } from '../..';
import MarginControl from '../../components/MarginControl';
import PaddingControl from '../../components/PaddingControl';

const ButtonBlockSettings: VFC<IBlockSettingsProps<IButtonSettings>> = (props) => {
  return (
    <Stack spacing={3}>
      <PaddingControl {...props} />
      <MarginControl {...props} />
    </Stack>
  );
};

export default ButtonBlockSettings;
