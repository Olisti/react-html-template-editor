import React from 'react';
import HtmlToReact, { Parser } from 'html-to-react';
import getRandomId from '@/services/randomId';
import {
  IParserNode,
  IPreprocessingInstruction,
  IProcessingInstruction,
} from '@/types/htmlToReact';
import { IEditorNodes } from '@/types/editorContext';

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
    // other nodes
    {
      shouldProcessNode: () => true,
      processNode: (node, _, index) => {
        const processed = this.processNodeDefinitions.processDefaultNode(node, [], index);
        this.nodes[node.id!] = {
          isBlock: false,
          props: {},
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
