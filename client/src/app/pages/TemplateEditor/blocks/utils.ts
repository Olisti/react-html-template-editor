import { CSSProperties } from 'react';

import { IAnyBlockSettings } from './types';

export const getBlockCSSProperties = (settings: IAnyBlockSettings): CSSProperties => {
  const { padding, margin } = settings;

  return { ...(padding && { padding }), ...(margin && { margin }) };
};
