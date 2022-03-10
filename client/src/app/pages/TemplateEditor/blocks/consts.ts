import ButtonBlock, { ButtonBlockSettings, DEFAULT_BUTTON_SETTINGS } from './items/ButtonBlock';
import ContainerBlock, {
  ContainerBlockSettings,
  DEFAULT_CONTAINER_SETTINGS,
} from './items/ContainerBlock';
import { IBlock } from './types';

export const EDITOR_BLOCKS: Record<string, IBlock> = {
  ContainerBlock: {
    item: ContainerBlock,
    settings: ContainerBlockSettings,
    defaultSettings: DEFAULT_CONTAINER_SETTINGS,
  },
  ButtonBlock: {
    item: ButtonBlock,
    settings: ButtonBlockSettings,
    defaultSettings: DEFAULT_BUTTON_SETTINGS,
  },
};
