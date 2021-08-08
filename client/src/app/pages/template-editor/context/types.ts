import { JSXElementConstructor, ReactElement } from 'react';

export interface IEditorData {
  name: string;
  html: string;
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

export interface IEditorNode {
  isBlock: boolean;
  blockName?: string;
  props: IBlockProps<any>;
  children: string[];
  el: IEditorNodeEl;
}

export interface IBlockProps<S> {
  id: string;
  tag: string;
  attribs: { styleObject: any; [key: string]: string };
  settings: S;
  children?: React.ReactNode;
}

export type IEditorNodeEl = ReactElement<any, string | JSXElementConstructor<any>>;

export interface IEditorNodes {
  [key: string]: IEditorNode;
}

export interface IUpdateSettingsProps {
  id: string;
  key: string;
  value: any;
}
