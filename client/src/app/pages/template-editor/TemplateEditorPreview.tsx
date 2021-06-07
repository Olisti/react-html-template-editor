import { IEditorNodes } from '@/types/editorContext';
import React, {
  JSXElementConstructor,
  memo,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useEditor } from './context/EditorContext';

const TemplateEditorPreviewMemo = memo(
  ({ nodes, rootNodeId }: { nodes: IEditorNodes; rootNodeId: string | null }) => {
    const [domTree, setDomTree] =
      useState<ReactElement<any, string | JSXElementConstructor<any>> | undefined>();
    useEffect(() => {
      const newDomTree = getTree(nodes, rootNodeId);
      setDomTree(newDomTree);
    }, [nodes, rootNodeId]);

    return <>{domTree}</>;
  }
);

export default function TemplateEditorPreview() {
  const { nodes, rootNodeId } = useEditor();
  return <TemplateEditorPreviewMemo nodes={nodes} rootNodeId={rootNodeId} />;
}

const getTree = (nodes: IEditorNodes, rootNodeId: string | null) => {
  const rootNode = rootNodeId ? nodes[rootNodeId] : null;
  if (!rootNode) return;
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
