import React from 'react';
import ButtonBlock from './button/ButtonBlock';

export interface IBlockSettingsProps<T> {
  blockSettings: T;
  updateSettings: (props: { key: string; value: any }) => void;
}

export const blockSettings = {
  ButtonBlock: ButtonBlock.settings,
} as { [key: string]: React.FunctionComponent<any> };
