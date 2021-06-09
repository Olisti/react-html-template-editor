import React from 'react';
import ButtonBlock from './button/ButtonBlock';

export const blockSettings = {
  ButtonBlock: ButtonBlock.settings,
} as { [key: string]: React.FunctionComponent<any> };
