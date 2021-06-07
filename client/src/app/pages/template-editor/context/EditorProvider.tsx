import { IEditorAction, IEditorData, IEditorState } from '@/types/editorContext';
import { ITemplate } from '@/types/template';
import { Reducer, useEffect, useReducer } from 'react';
import { HtmlToNodesParser } from '../services/htmlToNodesParser';
import { EditorContext, IEditorContext } from './EditorContext';
import { reducer } from './reducer';

interface IEditorProviderProps {
  template: ITemplate | null;
  saveHandler: (data: IEditorData) => void;
  children: React.ReactNode;
}

const initialState: IEditorState = { name: '', html: '', nodes: {}, rootNodeId: null };

const htmlParser = new HtmlToNodesParser();

export const EditorProvider = ({ template, saveHandler, children }: IEditorProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_NAME', payload: template?.name || '' });
    dispatch({ type: 'SET_HTML', payload: template?.html || '' });
    const { nodes, rootNodeId } = htmlParser.parse(template?.html || '');
    dispatch({ type: 'SET_NODES', payload: nodes });
    dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
    // console.log({ nodes, rootNodeId });
  }, [template]);

  const setHtml = (html: string) => {
    dispatch({ type: 'SET_HTML', payload: html });
  };

  const onSave = () => saveHandler({ html: state.html, name: state.name });

  const value: IEditorContext = {
    ...state,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    onSave,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
