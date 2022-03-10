import { JSXElementConstructor, ReactElement } from 'react';

import { IEditorData, ITemplate } from '..';
import { IBlockProps } from '../blocks';

export interface IEditorProviderProps {
  template?: ITemplate | null;
  isPreview: boolean;
  isDragging?: boolean;
  saveHandler?: (data: IEditorData) => void;
  children: React.ReactNode;
}
export interface IEditorContext extends IEditorState {
  isDragging: boolean;
  setName: (name: string) => void;
  setHtml: (html: string) => void;
  renderHtml: (domTree: IEditorNodeEl | null) => void;
  onSave: () => void;
  addBlock: (data: IAddBlockProps) => void;
  selectBlock: (data: ISelectBlockProps) => void;
  updateSettings: (props: IUpdateSettingsProps) => void;
}

export interface IEditorState extends IEditorData {
  nodes: IEditorNodes;
  rootNodeId: string | null;
  isPreview: boolean;
  selectedBlock: ISelectedBlock;
}

export interface IEditorAction {
  type:
    | 'SET_NAME'
    | 'SET_HTML'
    | 'SET_NODES'
    | 'SET_ROOT_NODE_ID'
    | 'SET_IS_PREVIEW'
    | 'SET_SELECTED_BLOCK'
    | 'UPDATE_BLOCK_SETTINGS';
  payload: any;
}

export type ISelectedBlock = { id: string | null; blockName: string; rect: DOMRect } | null;

export interface ISelectBlockProps {
  id: string | null;
  blockName: string;
  rect: DOMRect;
}

export type IEditorNodeEl = ReactElement<any, string | JSXElementConstructor<any>>;

export interface IEditorNodes {
  [key: string]: IEditorNode;
}
interface IEditorNode {
  isBlock: boolean;
  blockName?: string;
  props: IBlockProps<any>;
  children: string[];
  el: IEditorNodeEl;
}

export interface IUpdateSettingsProps {
  id: string;
  key: string;
  value: any;
}

export interface IAddBlockProps {
  blockId: string;
  blockType: string;
  innerIndex: number;
}
