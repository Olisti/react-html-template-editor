import React, { useCallback, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { useEditor } from '../context/EditorProvider';
import { IBlockProps } from '../context/types';

interface IBlockItemProps<T> {
  blockName: string;
  blockProps: IBlockProps<T>;
  styleSettings?: React.CSSProperties;
  children: React.ReactNode;
}

export default function BlockItem<T>({
  blockProps,
  blockName,
  styleSettings,
  children,
}: IBlockItemProps<T>) {
  const { styleObject, class: className, ...otherAttribs } = blockProps.attribs;
  const { isPreview, selectedBlock, selectBlock } = useEditor();
  const blockRef = useRef<Element | null>(null);
  const Tag = blockProps.tag || ('div' as any); // FIXME: any

  const isSelected = useMemo(
    () => selectedBlock?.id === blockProps.id,
    [selectedBlock, blockProps]
  );

  const classValue = classNames(
    className,
    isPreview && 'editor-block',
    isPreview && isSelected && 'editor-block__selected'
  );

  const onSelectBlock = useCallback(
    () => (e: Event) => {
      e.stopPropagation();
      let rect = {} as DOMRect;
      if (blockRef.current) rect = blockRef.current!.getBoundingClientRect();
      selectBlock({ id: blockProps.id, blockName, rect });
    },
    [blockProps, blockName, selectBlock]
  );

  return useMemo(
    () => (
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
    ),
    [Tag, classValue, otherAttribs, styleObject, styleSettings, isPreview, onSelectBlock, children]
  );
}
