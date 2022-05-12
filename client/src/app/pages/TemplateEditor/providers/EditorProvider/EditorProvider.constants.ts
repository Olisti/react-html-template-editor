import { IEditorState } from './EditorProvider.types';

export const INITIAL_STATE: IEditorState = {
  nodes: {},
  rootNodeId: null,
  isPreview: false,
  selectedBlock: null,
};
