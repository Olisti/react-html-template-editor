import { IContainerSettings } from './types';
import { IBlockSettings } from '..';

export const DEFAULT_CONTAINER_SETTINGS: IBlockSettings<IContainerSettings> = {
  props: { settings: { padding: null, margin: null } },
  children: {},
};
