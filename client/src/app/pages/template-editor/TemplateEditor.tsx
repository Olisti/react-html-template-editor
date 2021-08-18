import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { ITemplate } from '@/types/template';
import { EditorProvider } from './context/EditorProvider';
import { IEditorData } from './context/types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppHeader from '@/app/components/AppHeader';
import defaultTemplate from './defaultTemplate';
import TemplateEditorBlocks from './TemplateEditorBlocks';
import TemplateEditorBlockTools from './TemplateEditorBlockTools';
import TemplateEditorSettings from './TemplateEditorSettings';
import TemplateEditorPreview from './TemplateEditorPreview';
import TemplateEditorFrame from './TemplateEditorFrame';
import TemplateEditorCode from './TemplateEditorCode';
import TemplateEditorTools from './TemplateEditorTools';

export default function TemplateEditor() {
  const [template, setTemplate] = useState<ITemplate | null>(null);
  const [isDragging, setDragging] = useState(false);

  useEffect(() => {
    // TODO: get id
    setTemplate(defaultTemplate);
  }, []);

  const saveHandler = (data: IEditorData) => {
    // TODO: save
    console.log('save', data);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <EditorProvider
        template={template}
        isPreview={true}
        isDragging={isDragging}
        saveHandler={saveHandler}
      >
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
    </DndProvider>
  );
}
