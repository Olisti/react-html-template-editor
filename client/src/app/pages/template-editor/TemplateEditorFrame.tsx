import React, { ReactNode, useContext, useEffect } from 'react';
import { DndContext, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Frame, { FrameContext } from 'react-frame-component';

const DndFrame = ({ children }: { children: ReactNode }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);
  useEffect(() => {
    (dragDropManager?.getBackend() as any)?.addEventListeners(window);
  });
  return <>{children}</>;
};

const TemplateEditorFrameHead = () => (
  <>
    <meta charSet="utf-8" />
    <title>Preview</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <base target="_parent" />
    <style>{`body { margin: 0 }
.editor-block:hover { outline: 2px solid #93C2F0 }
.editor-block__selected { outline: 2px solid #0079F0 }`}</style>
  </>
);

const TemplateEditorFrame = ({ children }: { children: ReactNode }) => (
  <DndProvider backend={HTML5Backend}>
    <Frame style={{ height: '100%', width: '100%' }} head={<TemplateEditorFrameHead />}>
      <DndFrame>{children}</DndFrame>
    </Frame>
  </DndProvider>
);

export default TemplateEditorFrame;
