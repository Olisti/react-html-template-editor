import React from 'react';
import ButtonBlock from './button/ButtonBlock';
import { defaultButtonSettings } from './button/buttonSettings';
import ContainerBlock from './container/ContainerBlock';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

interface IBlock {
  item: React.FunctionComponent<any>;
  settings: React.FunctionComponent<any>;
  defaultSettings: { props: any; children: any };
}

export const blocks = {
  ContainerBlock: {
    item: ContainerBlock,
    settings: ContainerBlock.settings,
    defaultSettings: { props: {}, children: {} },
  },
  ButtonBlock: {
    item: ButtonBlock,
    settings: ButtonBlock.settings,
    defaultSettings: defaultButtonSettings,
  },
} as { [key: string]: IBlock };
