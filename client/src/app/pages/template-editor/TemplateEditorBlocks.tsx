import { Box, Button, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';

interface ITemplateEditorBlocks {
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TemplateEditorBlocks({ setDragging }: ITemplateEditorBlocks) {
  return (
    <Box padding="0.75em 1em">
      <Heading size="md" color="gray.500" marginBottom="0.3em" textAlign="center" fontWeight="500">
        Blocks
      </Heading>
      <Block name="Button" type="ButtonBlock" setDragging={setDragging} />
      <Block name="Text" type="TextBlock" setDragging={setDragging} />
    </Box>
  );
}

interface IBlockProps {
  name: string;
  type: string;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const Block: React.FC<IBlockProps> = ({ name, type, setDragging }) => {
  // TODO: drag preview https://react-dnd.github.io/react-dnd/docs/api/use-drag
  const [collected, drag] = useDrag({
    type,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setDragging(collected.isDragging);
  }, [collected.isDragging]);

  return (
    <Button ref={drag} colorScheme="gray" variant="ghost" width="100%">
      {name}
    </Button>
  );
};
