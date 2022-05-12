import debounce from 'lodash.debounce';
import { Reducer, VFC, useCallback, useEffect, useMemo, useReducer } from 'react';

import { HtmlToNodesParser } from '../../services/HtmlToNodesParser';
import { INITIAL_STATE } from './EditorProvider.constants';
import { EditorContext } from './EditorProvider.context';
import { addNodeOperation, reducer } from './EditorProvider.helpers';
import {
  IAddBlockProps,
  IEditorAction,
  IEditorContext,
  IEditorProviderProps,
  IEditorState,
  ISelectBlockProps,
  IUpdateBlockProps,
} from './EditorProvider.types';

const htmlParser = new HtmlToNodesParser();

export const EditorProvider: VFC<IEditorProviderProps> = ({
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

  const updateNodes = useCallback((html: string) => {
    debounce((html: string) => {
      const { nodes, rootNodeId } = htmlParser.parse(html || '');
      dispatch({ type: 'SET_NODES', payload: nodes });
      dispatch({ type: 'SET_ROOT_NODE_ID', payload: rootNodeId });
      dispatch({ type: 'SET_SELECTED_BLOCK', payload: null });
    }, 500)(html);
  }, []);

  const addBlock = useCallback(
    (data: IAddBlockProps) => {
      const newNodes = addNodeOperation({ nodes: state.nodes, ...data });
      dispatch({ type: 'SET_NODES', payload: newNodes });
    },
    [state.nodes]
  );

  const selectBlock = useCallback((data: ISelectBlockProps) => {
    dispatch({ type: 'SET_SELECTED_BLOCK', payload: data });
  }, []);

  const updateBlock = useCallback((props: IUpdateBlockProps) => {
    dispatch({ type: 'UPDATE_BLOCK_SETTINGS', payload: props });
  }, []);

  const value: IEditorContext = useMemo(
    () => ({
      ...state,
      isDragging: isDragging || false,
      updateNodes,
      addBlock,
      selectBlock,
      updateBlock,
    }),
    [state, isDragging, addBlock, selectBlock, updateBlock, updateNodes]
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
