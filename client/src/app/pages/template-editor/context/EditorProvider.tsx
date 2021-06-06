import { Template } from '@/types/template';
import { Reducer, useEffect, useReducer } from 'react';
import { EditorContext, IEditorContext } from './EditorContext';
import { IEditorAction, reducer } from './reducer';

interface IEditorProviderProps {
  template: Template | null;
  saveHandler: (data: IEditorState) => void;
  children: React.ReactNode;
}

export interface IEditorState {
  name: string;
  html: string;
}

const initialState: IEditorState = { name: '', html: '' };

export const EditorProvider = ({ template, saveHandler, children }: IEditorProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(reducer, initialState);

  const setHtml = (html: string) => {
    dispatch({ type: 'SET_HTML', payload: html });
  };

  useEffect(() => {
    dispatch({ type: 'SET_NAME', payload: template?.name || '' });
    dispatch({ type: 'SET_HTML', payload: template?.html || '' });
  }, [template]);

  const onSave = () => saveHandler(state);

  const value: IEditorContext = {
    ...state,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    onSave,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
