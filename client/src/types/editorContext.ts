import { JSXElementConstructor, ReactElement } from 'react';

export interface IEditorData {
  name: string;
  html: string;
}

export interface IEditorState extends IEditorData {
  nodes: IEditorNodes;
  rootNodeId: string | null;
}

export interface IEditorAction {
  type: 'SET_NAME' | 'SET_HTML' | 'SET_NODES' | 'SET_ROOT_NODE_ID';
  payload: any;
}

export interface IEditorNode {
  isBlock: boolean;
  props: any;
  children: string[];
  el: IEditorNodeEl;
}

export type IEditorNodeEl = ReactElement<any, string | JSXElementConstructor<any>>;

export interface IEditorNodes {
  [key: string]: IEditorNode;
}
