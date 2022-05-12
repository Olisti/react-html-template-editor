import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Frame from 'react-frame-component';

import { FrameDragDropManager } from './FrameDragDropManager.component';
import { FrameHead } from './FrameHead.component';

export const TemplateEditorFrame: FC = ({ children }) => (
  <DndProvider backend={HTML5Backend}>
    <Frame style={{ height: '100%', width: '100%' }} head={<FrameHead />}>
      <FrameDragDropManager>{children}</FrameDragDropManager>
    </Frame>
  </DndProvider>
);
