import debounce from 'lodash.debounce';
import React, { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { useEditor } from './context/EditorContext';
import { IEditorNodeEl, IEditorNodes } from './context/types';

export default function TemplateEditorPreview() {
  const { nodes, rootNodeId, renderHtml } = useEditor();
  return (
    <TemplateEditorPreviewMemo nodes={nodes} rootNodeId={rootNodeId} renderHtml={renderHtml} />
  );
}

const TemplateEditorPreviewMemo = memo(
  ({
    nodes,
    rootNodeId,
    renderHtml,
  }: {
    nodes: IEditorNodes;
    rootNodeId: string | null;
    renderHtml: any;
  }) => {
    const [domTree, setDomTree] = useState<IEditorNodeEl | null>();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedRenderHtml = useCallback(
      debounce((domTree: IEditorNodeEl | null) => {
        renderHtml(domTree);
      }, 500),
      []
    );

    useEffect(() => {
      const newDomTree = getTree(nodes, rootNodeId);
      debouncedRenderHtml(newDomTree);
      setDomTree(newDomTree);
    }, [nodes, rootNodeId, debouncedRenderHtml]);

    return <>{domTree}</>;
  }
);

const getTree = (nodes: IEditorNodes, rootNodeId: string | null) => {
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
