import { IEditorNodeEl, IEditorState, IUpdateSettingsProps } from './types';
import { createContext, useContext } from 'react';

export interface IEditorContext extends IEditorState {
  setName: (name: string) => void;
  setHtml: (html: string) => void;
  renderHtml: (domTree: IEditorNodeEl | null) => void;
  onSave: () => void;
  showSettings: (id: string | null) => void;
  updateSettings: (props: IUpdateSettingsProps) => void;
}

export const EditorContext = createContext({} as IEditorContext);

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) throw new Error('useEditor must be used within a EditorContext');
  return context;
};
