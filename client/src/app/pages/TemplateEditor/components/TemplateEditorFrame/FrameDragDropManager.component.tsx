import React, { FC, useContext, useEffect } from 'react';
import { DndContext } from 'react-dnd';
import { FrameContext } from 'react-frame-component';

export const FrameDragDropManager: FC = ({ children }) => {
  const { dragDropManager } = useContext(DndContext);
  const { window } = useContext(FrameContext);
  useEffect(() => {
    (dragDropManager?.getBackend() as any)?.addEventListeners(window);
  });
  return <>{children}</>;
};
