import { IEditorAction, IEditorData, IEditorState, IUpdateSettingsProps } from './types';
import { ITemplate } from '@/types/template';
import { Reducer, useCallback, useEffect, useReducer } from 'react';
import { HtmlToNodesParser } from '../services/htmlToNodesParser';
import { EditorContext, IEditorContext } from './EditorContext';
import { reducer } from './reducer';
import debounce from 'lodash.debounce';

interface IEditorProviderProps {
  template: ITemplate | null;
  isPreview: boolean;
  saveHandler: (data: IEditorData) => void;
  children: React.ReactNode;
}

const initialState: IEditorState = {
  name: '',
  html: '',
  nodes: {},
  rootNodeId: null,
  isPreview: false,
  selectedBlockId: null,
};

const htmlParser = new HtmlToNodesParser();

export const EditorProvider = ({
  template,
  isPreview,
  saveHandler,
  children,
}: IEditorProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_NAME', payload: template?.name || '' });
    dispatch({ type: 'SET_HTML', payload: template?.html || '' });
    const { nodes, rootNodeId } = htmlParser.parse(template?.html || '');
    dispatch({ type: 'SET_NODES', payload: nodes });
    dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
  }, [template]);

  useEffect(() => {
    dispatch({ type: 'SET_IS_PREVIEW', payload: isPreview });
  }, [isPreview]);

  const setHtml = (html: string) => {
    dispatch({ type: 'SET_HTML', payload: html });
    debouncedRenderNodes(html);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRenderNodes = useCallback(
    debounce((html: string) => {
      const { nodes, rootNodeId } = htmlParser.parse(html || '');
      dispatch({ type: 'SET_NODES', payload: nodes });
      dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
    }, 500),
    []
  );

  const onSave = () => saveHandler({ html: state.html, name: state.name });

  const showSettings = (id: string | null) => {
    dispatch({ type: 'SET_SELECTED_BLOCK_ID', payload: id });
  };

  const updateSettings = (props: IUpdateSettingsProps) => {
    dispatch({ type: 'UPDATE_BLOCK_SETTINGS', payload: props });
  };

  const value: IEditorContext = {
    ...state,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    onSave,
    showSettings,
    updateSettings,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
