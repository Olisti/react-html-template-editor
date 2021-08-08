import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import { useEditor } from '../context/EditorContext';
import { IBlockProps, ISelectBlockProps } from '../context/types';

interface IBlockItemProps<T> {
  blockName: string;
  blockProps: IBlockProps<T>;
  styleSettings?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BlockItem<T>(props: IBlockItemProps<T>) {
  const { isPreview, selectedBlock, selectBlock } = useEditor();
  return (
    <BlockItemMemo
      {...props}
      isPreview={isPreview}
      isSelected={selectedBlock?.id === props.blockProps.id}
      selectBlock={selectBlock}
    />
  );
}

interface IBlockItemMemoProps extends IBlockItemProps<any> {
  isPreview: boolean;
  isSelected: boolean;
  selectBlock: (data: ISelectBlockProps) => void;
}

const BlockItemMemo = memo(
  ({
    isPreview,
    isSelected,
    selectBlock,
    blockName,
    blockProps,
    styleSettings,
    children,
  }: IBlockItemMemoProps) => {
    const Tag = blockProps.tag || ('div' as any); // FIXME: any
    const blockRef = useRef<Element | null>(null);
    const { styleObject, class: className, ...otherAttribs } = blockProps.attribs;

    const onSelectBlock = (e: Event) => {
      e.stopPropagation();
      let rect = {} as DOMRect;
      if (blockRef.current) rect = blockRef.current!.getBoundingClientRect();
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
