import getRandomId from '@/services/randomId';
import React from 'react';
import { blocks } from '../blocks';
import { IAddBlockProps, IBlockProps, IEditorNodes } from './types';

export function addNodeOperation({
  nodes,
  blockId,
  blockType,
  innerIndex,
}: IAddBlockProps & { nodes: IEditorNodes }) {
  const newNodeId = `id-${getRandomId()}`;
  const defaultSettings = blocks[blockType].defaultSettings;
  const props: Partial<IBlockProps<any>> = {
    id: newNodeId,
    key: newNodeId,
    ...defaultSettings.props,
  };
  const el = React.createElement(blocks[blockType].item, props, defaultSettings.children);
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
