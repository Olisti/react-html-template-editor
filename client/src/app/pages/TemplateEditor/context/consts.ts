import { IEditorState } from './types';

export const INITIAL_STATE: IEditorState = {
  name: '',
  html: '',
  nodes: {},
  rootNodeId: null,
  isPreview: false,
  selectedBlock: null,
};
