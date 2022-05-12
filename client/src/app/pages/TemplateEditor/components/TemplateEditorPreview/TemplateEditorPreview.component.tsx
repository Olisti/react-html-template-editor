import debounce from 'lodash.debounce';
import React, { VFC, useEffect, useMemo, useState } from 'react';

import { IEditorNodeEl, useEditor } from '../../providers/EditorProvider';
import { useTemplate } from '../../providers/TemplateProvider';
import { getTree } from './TemplateEditorPreview.helpers';

export const TemplateEditorPreview: VFC = () => {
  const { nodes, rootNodeId } = useEditor();
  const { renderHtml } = useTemplate();
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
