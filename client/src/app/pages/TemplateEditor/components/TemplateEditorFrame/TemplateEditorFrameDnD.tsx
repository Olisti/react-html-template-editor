import React, { FC, useContext, useEffect } from 'react';
import { DndContext } from 'react-dnd';
import { FrameContext } from 'react-frame-component';

const TemplateEditorFrameDnD: FC = ({ children }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);
  useEffect(() => {
    (dragDropManager?.getBackend() as any)?.addEventListeners(window);
  });
  return <>{children}</>;
};

export default TemplateEditorFrameDnD;
