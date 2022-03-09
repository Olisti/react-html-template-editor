import React from 'react';

export interface IPreprocessingInstruction {
  shouldPreprocessNode(node: IParserNode): boolean;
  preprocessNode(node: IParserNode): void;
}

export interface IProcessingInstruction {
  shouldProcessNode(node: IParserNode): boolean;
  processNode(node: IParserNode, children: React.ReactNode[] | string[], index: number): void;
}

export interface IParserNode {
  id?: string;
  type: 'text' | 'comment' | 'tag' | 'script';
  name: string;
  data: string;
  startIndex: number | null;
  endIndex: number | null;
  attribs: any;
  children: IParserNode[];
  next: IParserNode;
  parent: IParserNode;
  prev: IParserNode;
}
