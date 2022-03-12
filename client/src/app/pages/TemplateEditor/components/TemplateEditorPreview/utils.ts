import React, { ReactNode } from 'react';

import { IEditorNodes } from '../../contexts/EditorContext';

export const getTree = (nodes: IEditorNodes, rootNodeId: string | null) => {
  const rootNode = rootNodeId ? nodes[rootNodeId] : null;
  if (!rootNode) return null;

  const getChildren = (childIds: string[]): ReactNode => {
    if (!childIds || childIds.length < 1) return [];
    return childIds.map((childId, index: number) => {
      if (!nodes[childId]) return console.error('EditorPreview - getTree error');
      if (typeof nodes[childId].el === 'string') return nodes[childId].el;
      return React.cloneElement(
        nodes[childId].el,
        { ...nodes[childId].props, key: index },
        getChildren(nodes[childId].children)
      );
    });
  };

  return React.cloneElement(rootNode.el, rootNode.props, getChildren(rootNode.children));
};
