import React, { VFC } from 'react';
import { Stack } from '@chakra-ui/react';

import { IContainerSettings } from './types';
import { IBlockSettingsProps } from '../..';
import PaddingControl from '../../components/PaddingControl';
import MarginControl from '../../components/MarginControl';

const ContainerBlockSettings: VFC<IBlockSettingsProps<IContainerSettings>> = (props) => {
  return (
    <Stack spacing={3}>
      <PaddingControl {...props} />
      <MarginControl {...props} />
    </Stack>
  );
};

export default ContainerBlockSettings;
