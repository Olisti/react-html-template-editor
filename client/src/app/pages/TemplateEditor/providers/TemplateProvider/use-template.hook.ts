import { useContext } from 'react';

import { TemplateContext } from './TemplateProvider.context';

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) throw new Error('useTemplate must be used within a TemplateContext');
  return context;
};
