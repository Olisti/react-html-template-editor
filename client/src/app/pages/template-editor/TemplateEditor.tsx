import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { ITemplate } from '@/types/template';
import { EditorProvider } from './context/EditorProvider';
import { IEditorData } from '@/types/editorContext';
import AppHeader from '@/app/components/AppHeader';
import TemplateEditorBlocks from './TemplateEditorBlocks';
import TemplateEditorSettings from './TemplateEditorSettings';
import TemplateEditorPreview from './TemplateEditorPreview';
import TemplateEditorCode from './TemplateEditorCode';
import TemplateEditorTools from './TemplateEditorTools';
import defaultTemplate from './defaultTemplate';

export default function TemplateEditor() {
  const [template, setTemplate] = useState<ITemplate | null>(null);

  useEffect(() => {
    // TODO: get id
    setTemplate(defaultTemplate);
  }, []);

  const saveHandler = (data: IEditorData) => {
    // TODO: save
    console.log('save', data);
  };

  return (
    <EditorProvider template={template} saveHandler={saveHandler}>
      <AppHeader>
        <TemplateEditorTools />
      </AppHeader>
      <Grid flex="1" templateColumns="10em auto 10em">
        <GridItem bg="gray.50" borderRight="1px" borderColor="gray.200">
          <TemplateEditorBlocks />
        </GridItem>
        <GridItem>
          <Flex flexDirection="column" height="100%">
            <Box flex="1">
              <TemplateEditorPreview />
            </Box>
            <TemplateEditorCode />
          </Flex>
        </GridItem>
        <GridItem bg="gray.50" borderLeft="1px" borderColor="gray.200">
          <TemplateEditorSettings />
        </GridItem>
      </Grid>
    </EditorProvider>
  );
}
