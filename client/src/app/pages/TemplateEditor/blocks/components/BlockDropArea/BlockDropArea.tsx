import React, { useEffect, useState, VFC } from 'react';

import { IBlockDropAreaProps } from './types';
import BlockDropAreaItem from './BlockDropAreaItem';
import { useEditor } from '../../../contexts/EditorContext';

const BlockDropArea: VFC<IBlockDropAreaProps> = (props) => {
  const { isPreview, addBlock } = useEditor();
  const [isShown, setShown] = useState(false);
  useEffect(() => {
    setImmediate(() => setShown(isPreview));
  }, [isPreview]);
  if (!isShown) return null;
  return <BlockDropAreaItem {...props} addBlock={addBlock} />;
};

export default BlockDropArea;
