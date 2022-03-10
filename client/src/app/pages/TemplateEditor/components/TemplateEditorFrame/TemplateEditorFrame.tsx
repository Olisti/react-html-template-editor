import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Frame from 'react-frame-component';

import TemplateEditorFrameDnD from './TemplateEditorFrameDnD';
import TemplateEditorFrameHead from './TemplateEditorFrameHead';

const TemplateEditorFrame: FC = ({ children }) => (
  <DndProvider backend={HTML5Backend}>
    <Frame style={{ height: '100%', width: '100%' }} head={<TemplateEditorFrameHead />}>
      <TemplateEditorFrameDnD>{children}</TemplateEditorFrameDnD>
    </Frame>
  </DndProvider>
);

export default TemplateEditorFrame;
