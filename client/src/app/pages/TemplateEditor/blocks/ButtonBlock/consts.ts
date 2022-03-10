import { IBlockSettings } from '..';
import { IButtonSettings } from './types';

export const DEFAULT_BUTTON_SETTINGS: IBlockSettings<IButtonSettings> = {
  props: {
    tag: 'button',
    attribs: { 'data-block': 'button', styleObject: {} },
    settings: { padding: null, margin: null },
  },
  children: 'Button',
};
