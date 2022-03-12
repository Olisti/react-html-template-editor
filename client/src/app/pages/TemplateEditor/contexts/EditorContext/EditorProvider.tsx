import { Reducer, useEffect, useMemo, useReducer, VFC } from 'react';
import debounce from 'lodash.debounce';

import {
  IEditorAction,
  IEditorContext,
  IEditorProviderProps,
  IEditorState,
  ISelectBlockProps,
  IAddBlockProps,
  IUpdateBlockProps,
} from './types';
import { reducer, addNodeOperation } from './utils';
import { INITIAL_STATE } from './consts';
import { EditorContext } from './EditorContext';
import { HtmlToNodesParser } from '../../services/HtmlToNodesParser';

const htmlParser = new HtmlToNodesParser();

const EditorProvider: VFC<IEditorProviderProps> = ({
  template,
  isPreview,
  isDragging,
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<IEditorState, IEditorAction>>(
    reducer,
    INITIAL_STATE
  );

  useEffect(() => {
    const { nodes, rootNodeId } = htmlParser.parse(template?.html || '');
    dispatch({ type: 'SET_NODES', payload: nodes });
    dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
  }, [template]);

  useEffect(() => {
    dispatch({ type: 'SET_IS_PREVIEW', payload: isPreview });
  }, [isPreview]);

  const updateNodes = (html: string) => {
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

  const addBlock = (data: IAddBlockProps) => {
    const newNodes = addNodeOperation({ nodes: state.nodes, ...data });
    dispatch({ type: 'SET_NODES', payload: newNodes });
  };

  const selectBlock = (data: ISelectBlockProps) => {
    dispatch({ type: 'SET_SELECTED_BLOCK', payload: data });
  };

  const updateBlock = (props: IUpdateBlockProps) => {
    dispatch({ type: 'UPDATE_BLOCK_SETTINGS', payload: props });
  };

  const value: IEditorContext = {
    ...state,
    isDragging: isDragging || false,
    updateNodes,
    addBlock,
    selectBlock,
    updateBlock,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

export default EditorProvider;
