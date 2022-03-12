import { useContext } from 'react';
import { TemplateContext } from './TemplateContext';

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) throw new Error('useTemplate must be used within a TemplateContext');
  return context;
};
