import { Reducer, useEffect, useMemo, useReducer, useRef, VFC } from 'react';
import debounce from 'lodash.debounce';

import {
  IAddBlockProps,
  IEditorAction,
  IEditorContext,
  IEditorNodeEl,
  IEditorProviderProps,
  IEditorState,
  ISelectBlockProps,
  IUpdateSettingsProps,
} from './types';
import { reducer, addNodeOperation } from './utils';
import { INITIAL_STATE } from './consts';
import { EditorContext } from './EditorContext';
import { HtmlToNodesParser } from '../services/HtmlToNodesParser';
import { renderNodesToHtml } from '../services/NodesToHtmlRender';

const htmlParser = new HtmlToNodesParser();

const EditorProvider: VFC<IEditorProviderProps> = ({
  template,
  isPreview,
  isDragging,
  saveHandler,
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(
    reducer,
    INITIAL_STATE
  );
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

  const debouncedRenderNodes = useMemo(
    () =>
      debounce((html: string) => {
        const { nodes, rootNodeId } = htmlParser.parse(html || '');
        dispatch({ type: 'SET_NODES', payload: nodes });
        dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
        dispatch({ type: 'SET_SELECTED_BLOCK', payload: null });
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

  const addBlock = (data: IAddBlockProps) => {
    const newNodes = addNodeOperation({ nodes: state.nodes, ...data });
    dispatch({ type: 'SET_NODES', payload: newNodes });
  };

  const selectBlock = (data: ISelectBlockProps) => {
    dispatch({ type: 'SET_SELECTED_BLOCK', payload: data });
  };

  const updateSettings = (props: IUpdateSettingsProps) => {
    isCodeChangedRef.current = false;
    dispatch({ type: 'UPDATE_BLOCK_SETTINGS', payload: props });
  };

  const value: IEditorContext = {
    ...state,
    isDragging: isDragging || false,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    renderHtml,
    onSave,
    addBlock,
    selectBlock,
    updateSettings,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

export default EditorProvider;
