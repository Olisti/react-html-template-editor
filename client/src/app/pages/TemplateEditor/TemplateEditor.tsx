import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import { ITemplate, IEditorData } from './types';
import { DEFAULT_TEMPLATE } from './consts';
import { EditorProvider } from './contexts/EditorContext';
import { TemplateProvider } from './contexts/TemplateContext';
import AppHeader from '@/app/components/AppHeader';
import TemplateEditorBlocks from './components/TemplateEditorBlocks';
import TemplateEditorBlockTools from './components/TemplateEditorBlockTools';
import TemplateEditorSettings from './components/TemplateEditorSettings';
import TemplateEditorPreview from './components/TemplateEditorPreview';
import TemplateEditorFrame from './components/TemplateEditorFrame';
import TemplateEditorCode from './components/TemplateEditorCode';
import TemplateEditorTools from './components/TemplateEditorTools';

export default function TemplateEditor() {
  const [template, setTemplate] = useState<ITemplate | null>(null);
  const [isDragging, setDragging] = useState(false);

  useEffect(() => {
    // TODO: get id
    setTemplate(DEFAULT_TEMPLATE);
  }, []);

  const saveHandler = (data: IEditorData) => {
    // TODO: save
    console.log('save', data);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TemplateProvider template={template} saveHandler={saveHandler}>
        <EditorProvider template={template} isPreview={true} isDragging={isDragging}>
          <AppHeader>
            <TemplateEditorTools />
          </AppHeader>
          <Grid flex="1" templateColumns="8em auto 15em">
            <GridItem bg="gray.50" borderRight="1px" borderColor="gray.200">
              <TemplateEditorBlocks setDragging={setDragging} />
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" height="100%">
                <Box position="relative" flex="1">
                  <TemplateEditorBlockTools />
                  <TemplateEditorFrame>
                    <TemplateEditorPreview />
                  </TemplateEditorFrame>
                </Box>
                <TemplateEditorCode />
              </Flex>
            </GridItem>
            <GridItem bg="gray.50" borderLeft="1px" borderColor="gray.200">
              <TemplateEditorSettings />
            </GridItem>
          </Grid>
        </EditorProvider>
      </TemplateProvider>
    </DndProvider>
  );
}
