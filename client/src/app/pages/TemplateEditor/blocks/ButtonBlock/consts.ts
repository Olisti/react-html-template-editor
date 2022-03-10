import { IBlockSettings } from '../types';

export const DEFAULT_BUTTON_SETTINGS: IBlockSettings = {
  props: {
    tag: 'button',
    attribs: { 'data-block': 'button', styleObject: {} },
    settings: { padding: null, margin: null },
  },
  children: 'Button',
};
