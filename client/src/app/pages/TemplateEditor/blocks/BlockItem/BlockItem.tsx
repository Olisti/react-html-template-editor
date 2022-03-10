import React, { FC, memo, useRef, MouseEvent } from 'react';
import classNames from 'classnames';

import { IBlockItemMemoProps, IBlockItemProps, ITagName } from './types';
import { useEditor } from '../../context';

function BlockItem<T>(props: IBlockItemProps<T>) {
  const { isPreview, selectedBlock, selectBlock } = useEditor();
  return (
    <BlockItemMemo
      {...props}
      blockName={props.blockName}
      isPreview={isPreview}
      isSelected={selectedBlock?.id === props.blockProps.id}
      selectBlock={selectBlock}
    />
  );
}

const BlockItemMemo: FC<IBlockItemMemoProps> = memo(
  ({ blockName, isPreview, isSelected, selectBlock, blockProps, styleSettings, children }) => {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const Tag = (blockProps.tag || 'div') as ITagName;
    const { styleObject, class: className, ...restAttribs } = blockProps.attribs || {};

    const onSelectBlock = (e: MouseEvent) => {
      if (!blockRef.current) return;
      e.stopPropagation();
      const rect = blockRef.current!.getBoundingClientRect();
      selectBlock({ id: blockProps.id, blockName, rect });
    };

    const classValue = classNames(
      className,
      isPreview && 'editor-block',
      isPreview && isSelected && 'editor-block__selected'
    );

    return (
      <Tag
        {...restAttribs}
        {...(classValue && { className: classValue })}
        style={{
          ...styleObject,
          ...styleSettings,
        }}
        ref={blockRef}
        onMouseDown={onSelectBlock}
      >
        {isPreview && 'Preview!'}
        {children}
      </Tag>
    );
  }
);

export default BlockItem;
