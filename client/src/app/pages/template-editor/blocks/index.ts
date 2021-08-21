import React from 'react';
import ButtonBlock from './button/ButtonBlock';
import ContainerBlock from './container/ContainerBlock';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

export const blockSettings = {
  ContainerBlock: ContainerBlock.settings,
  ButtonBlock: ButtonBlock.settings,
} as { [key: string]: React.FunctionComponent<any> };
