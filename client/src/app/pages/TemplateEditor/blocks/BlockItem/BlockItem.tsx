import React, { memo, useRef, VFC } from 'react';
import classNames from 'classnames';

import { IBlockItemMemoProps, IBlockItemProps } from './types';
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

const BlockItemMemo: VFC<IBlockItemMemoProps> = memo(
  ({ blockName, isPreview, isSelected, selectBlock, blockProps, styleSettings, children }) => {
    const blockRef = useRef<Element | null>(null);
    const Tag = blockProps.tag || ('div' as any); // FIXME: any
    const { styleObject, class: className, ...otherAttribs } = blockProps.attribs;

    const onSelectBlock = (e: Event) => {
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
        {...otherAttribs}
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
