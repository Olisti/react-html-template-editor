import React, { useEffect, useMemo, useState, VFC } from 'react';
import debounce from 'lodash.debounce';

import { getTree } from './utils';
import { useEditor, IEditorNodeEl } from '../../context';

const TemplateEditorPreview: VFC = () => {
  const { nodes, rootNodeId, renderHtml } = useEditor();
  const [domTree, setDomTree] = useState<IEditorNodeEl | null>();

  const debouncedRenderHtml = useMemo(
    () =>
      debounce((domTree: IEditorNodeEl | null) => {
        renderHtml(domTree);
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const newDomTree = getTree(nodes, rootNodeId);
    debouncedRenderHtml(newDomTree);
    setDomTree(newDomTree);
  }, [nodes, rootNodeId, debouncedRenderHtml]);

  return useMemo(() => <>{domTree}</>, [domTree]);
};

export default TemplateEditorPreview;
