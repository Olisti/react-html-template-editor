import { IEditorAction, IEditorState } from './types';

export function reducer(state: IEditorState, action: IEditorAction): IEditorState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_HTML':
      return { ...state, html: action.payload };
    case 'SET_NODES':
      return { ...state, nodes: action.payload };
    case 'SET_ROOT_NODE_ID':
      return { ...state, rootNodeId: action.payload };
    case 'SET_IS_PREVIEW':
      return { ...state, isPreview: action.payload };
    case 'SET_SELECTED_BLOCK_ID':
      return { ...state, selectedBlockId: action.payload };
    case 'UPDATE_BLOCK_SETTINGS':
      const { id, key, value } = action.payload;
      let node = state.nodes[id];
      if (!node) return { ...state };
      const settings = { ...node.props.settings, [key]: value };
      node.props.settings = { ...settings };
      return {
        ...state,
        nodes: { ...state.nodes, [id]: node },
      };
    default:
      throw new Error();
  }
}
