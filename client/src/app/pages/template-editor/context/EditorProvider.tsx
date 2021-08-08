import {
  IEditorAction,
  IEditorData,
  IEditorNodeEl,
  IEditorState,
  ISelectBlockProps,
  IUpdateSettingsProps,
} from './types';
import { ITemplate } from '@/types/template';
import { Reducer, useCallback, useEffect, useReducer, useRef } from 'react';
import { HtmlToNodesParser } from '../services/htmlToNodesParser';
import { EditorContext, IEditorContext } from './EditorContext';
import { reducer } from './reducer';
import debounce from 'lodash.debounce';
import { renderNodesToHtml } from '../services/nodesToHtmlRender';

interface IEditorProviderProps {
  template?: ITemplate | null;
  isPreview: boolean;
  saveHandler?: (data: IEditorData) => void;
  children: React.ReactNode;
}

const initialState: IEditorState = {
  name: '',
  html: '',
  nodes: {},
  rootNodeId: null,
  isPreview: false,
  selectedBlock: null,
};

const htmlParser = new HtmlToNodesParser();

export const EditorProvider = ({
  template,
  isPreview,
  saveHandler,
  children,
}: IEditorProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(reducer, initialState);
  const isCodeChangedRef = useRef(false);

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
    isCodeChangedRef.current = true;
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

  const renderHtml = (domTree: IEditorNodeEl | null) => {
    if (isCodeChangedRef.current) return;
    renderNodesToHtml({
      domTree,
      setHtml: (html: string) => {
        dispatch({ type: 'SET_HTML', payload: html });
      },
    });
  };

  const onSave = () => saveHandler && saveHandler({ html: state.html, name: state.name });

  const selectBlock = (data: ISelectBlockProps) => {
    dispatch({ type: 'SET_SELECTED_BLOCK', payload: data });
  };

  const updateSettings = (props: IUpdateSettingsProps) => {
    isCodeChangedRef.current = false;
    dispatch({ type: 'UPDATE_BLOCK_SETTINGS', payload: props });
  };

  const value: IEditorContext = {
    ...state,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    renderHtml,
    onSave,
    selectBlock,
    updateSettings,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
