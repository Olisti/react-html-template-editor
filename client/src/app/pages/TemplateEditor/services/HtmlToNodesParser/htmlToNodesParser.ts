import React from 'react';
import HtmlToReact, { Parser } from 'html-to-react';
import getRandomId from '@/services/randomId';

import { IParserNode, IPreprocessingInstruction, IProcessingInstruction } from './types';
import { getStyleObjectFromString } from './utils';
import { IEditorNodes } from '../../context';
import { ContainerBlock, ButtonBlock, IBlockProps } from '../../blocks';

const htmlToReactParser = new Parser();

export class HtmlToNodesParser {
  nodes: IEditorNodes = {};
  rootNodeId: string | null = null;

  isValidNode = (node: IParserNode) => node.type !== 'script';

  processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

  preprocessingInstructions: IPreprocessingInstruction[] = [
    {
      shouldPreprocessNode: (node) => node.type !== 'text' || node.data.trim() !== '',
      preprocessNode: (node) => (node.id = `id-${getRandomId()}`),
    },
  ];

  processingInstructions: IProcessingInstruction[] = [
    // remove empty text nodes
    {
      shouldProcessNode: (node) => node.type === 'text' && node.data.trim() === '',
      processNode: () => null,
    },
    // container block
    {
      shouldProcessNode: (node) => node.attribs?.['data-block'] === 'container',
      processNode: (node, children, index) => {
        const styleObject = getStyleObjectFromString(node.attribs?.style);
        const props: IBlockProps<any> = {
          id: node.id!,
          tag: node.name,
          key: index,
          attribs: { ...node.attribs, styleObject },
          settings: { padding: styleObject?.padding || null, margin: styleObject?.margin || null },
        };
        const el = React.createElement(ContainerBlock, props, children);
        this.nodes[node.id!] = {
          isBlock: true,
          blockName: 'ContainerBlock',
          props,
          children: (node.children || []).filter((child) => !!child.id).map((child) => child.id!),
          el,
        };
        return el;
      },
    },
    // button block
    {
      shouldProcessNode: (node) => node.attribs?.['data-block'] === 'button',
      processNode: (node, children, index) => {
        const styleObject = getStyleObjectFromString(node.attribs?.style);
        const props: IBlockProps<any> = {
          id: node.id!,
          tag: node.name,
          key: index,
          attribs: { ...node.attribs, styleObject },
          settings: { padding: styleObject?.padding || null, margin: styleObject?.margin || null },
        };
        const el = React.createElement(ButtonBlock, props, children);
        this.nodes[node.id!] = {
          isBlock: true,
          blockName: 'ButtonBlock',
          props,
          children: (node.children || []).filter((child) => !!child.id).map((child) => child.id!),
          el,
        };
        return el;
      },
    },
    // other nodes
    {
      shouldProcessNode: () => true,
      processNode: (node, _, index) => {
        const processed = this.processNodeDefinitions.processDefaultNode(node, [], index);
        this.nodes[node.id!] = {
          isBlock: false,
          props: { key: index } as IBlockProps<any>,
          children: (node.children || []).filter((child) => !!child.id).map((child) => child.id!),
          el: processed,
        };
        if (index === 0) this.rootNodeId = node.id!;
        return processed;
      },
    },
  ];

  parse(string: string) {
    this.nodes = {};
    this.rootNodeId = null;
    htmlToReactParser.parseWithInstructions(
      string,
      this.isValidNode,
      this.processingInstructions,
      this.preprocessingInstructions
    );
    return { nodes: this.nodes, rootNodeId: this.rootNodeId };
  }
}
