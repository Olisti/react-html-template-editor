import React, { memo } from 'react';
import classNames from 'classnames';
import { useEditor } from '../context/EditorContext';
import { IBlockProps } from '../context/types';

interface IBlockItemMemoProps extends IBlockItemProps<any> {
  isPreview: boolean;
  isSelected: boolean;
  showSettings: (id: string | null) => void;
}

const BlockItemMemo = memo(
  ({
    isPreview,
    isSelected,
    showSettings,
    blockProps,
    styleSettings,
    children,
  }: IBlockItemMemoProps) => {
    const Tag = blockProps.tag || ('div' as any); // FIXME: any
    const { styleObject, class: className, ...otherAttribs } = blockProps.attribs;

    console.log('BlockItemMemo');
    return (
      <Tag
        {...otherAttribs}
        className={classNames(className, 'editor-block', isSelected && 'editor-block__selected')}
        style={{
          ...styleObject,
          ...styleSettings,
        }}
        onClick={(e: any) => {
          e.stopPropagation();
          showSettings(blockProps.id);
        }}
      >
        {isPreview && 'Preview!'}
        {children}
      </Tag>
    );
  }
);

interface IBlockItemProps<T> {
  blockProps: IBlockProps<T>;
  styleSettings?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BlockItem<T>(props: IBlockItemProps<T>) {
  const { isPreview, selectedBlockId, showSettings } = useEditor();
  return (
    <BlockItemMemo
      {...props}
      isPreview={isPreview}
      isSelected={selectedBlockId === props.blockProps.id}
      showSettings={showSettings}
    />
  );
}
