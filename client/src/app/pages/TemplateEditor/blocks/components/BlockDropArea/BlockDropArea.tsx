import React, { VFC, useEffect, useState } from 'react';

import { useEditor } from '../../../providers/EditorProvider';
import BlockDropAreaItem from './BlockDropAreaItem';
import { IBlockDropAreaProps } from './types';

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
