import { IContainerSettings } from './types';
import { IBlockSettings } from '../..';

export const DEFAULT_CONTAINER_SETTINGS: IBlockSettings<IContainerSettings> = {
  props: {
    id: 'container',
    key: 'container',
    settings: { padding: null, margin: null },
  },
  children: {},
};
