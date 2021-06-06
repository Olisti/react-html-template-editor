import { createContext, useContext } from 'react';

export interface IEditorContext {
  name: string;
  html: string;
  setName: (name: string) => void;
  setHtml: (html: string) => void;
  onSave: () => void;
}

export const EditorContext = createContext({} as IEditorContext);

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) throw new Error('useEditor must be used within a EditorContext');
  return context;
};
