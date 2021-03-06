import getRandomId from '@/services/randomId';
import React from 'react';
import { EDITOR_BLOCKS, IBlockProps } from '../../blocks';
import { IAddBlockProps, IEditorAction, IEditorNodes, IEditorState } from './types';

export function reducer(state: IEditorState, action: IEditorAction): IEditorState {
  switch (action.type) {
    case 'SET_NODES':
      return { ...state, nodes: action.payload };
    case 'SET_ROOT_NODE_ID':
      return { ...state, rootNodeId: action.payload };
    case 'SET_IS_PREVIEW':
      return { ...state, isPreview: action.payload };
    case 'SET_SELECTED_BLOCK':
      return { ...state, selectedBlock: action.payload };
    case 'UPDATE_BLOCK_SETTINGS':
      const { id, key, value } = action.payload;
      let node = state.nodes[id];
      if (!node) return { ...state };
      const settings = { ...node.props.settings, [key]: value };
      node.props.settings = { ...settings };
      return {
        ...state,
        nodes: { ...state.nodes, [id]: node },
      };
    default:
      throw new Error();
  }
}

export function addNodeOperation({
  nodes,
  blockId,
  blockType,
  innerIndex,
}: IAddBlockProps & { nodes: IEditorNodes }) {
  const newNodeId = `id-${getRandomId()}`;
  const defaultSettings = EDITOR_BLOCKS[blockType].defaultSettings;
  const props: Partial<IBlockProps<any>> = {
    ...defaultSettings.props,
    id: newNodeId,
    key: newNodeId,
  };
  const el = React.createElement(EDITOR_BLOCKS[blockType].item, props, defaultSettings.children);
  const newNode = {
    [newNodeId]: {
      isBlock: true,
      blockName: blockType,
      props,
      children: [],
      el,
    },
  };
  const newParentChildren = nodes[blockId].children;
  newParentChildren.splice(innerIndex || 0, 0, newNodeId);
  const parentNode = {
    [blockId]: {
      ...nodes[blockId],
      children: newParentChildren,
    },
  };
  return {
    ...nodes,
    ...parentNode,
    ...newNode,
  };
}
