import ButtonBlock, { DEFAULT_BUTTON_SETTINGS } from './ButtonBlock';
import ContainerBlock, { DEFAULT_CONTAINER_SETTINGS } from './ContainerBlock';
import { IBlock } from './types';

export const EDITOR_BLOCKS: Record<string, IBlock> = {
  ContainerBlock: {
    item: ContainerBlock,
    settings: ContainerBlock.settings,
    defaultSettings: DEFAULT_CONTAINER_SETTINGS,
  },
  ButtonBlock: {
    item: ButtonBlock,
    settings: ButtonBlock.settings,
    defaultSettings: DEFAULT_BUTTON_SETTINGS,
  },
};
