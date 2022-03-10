import { useContext } from 'react';
import { EditorContext } from './EditorContext';

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) throw new Error('useEditor must be used within a EditorContext');
  return context;
};
