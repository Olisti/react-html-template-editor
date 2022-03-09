import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import { useEditor } from '../context/EditorProvider';
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
      blockName={props.blockName}
      isPreview={isPreview}
      isSelected={selectedBlock?.id === props.blockProps.id}
      selectBlock={selectBlock}
    />
  );
}

interface IBlockItemMemoProps extends IBlockItemProps<any> {
  blockName: string;
  isPreview: boolean;
  isSelected: boolean;
  selectBlock: (data: ISelectBlockProps) => void;
}

const BlockItemMemo = memo(
  ({
    blockName,
    isPreview,
    isSelected,
    selectBlock,
    blockProps,
    styleSettings,
    children,
  }: IBlockItemMemoProps) => {
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
