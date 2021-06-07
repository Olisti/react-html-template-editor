import { IEditorAction, IEditorState } from '@/types/editorContext';

export function reducer(state: IEditorState, action: IEditorAction) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_HTML':
      return { ...state, html: action.payload };
    case 'SET_NODES':
      return { ...state, nodes: action.payload };
    case 'SET_ROOT_NODE_ID':
      return { ...state, rootNodeId: action.payload };
    default:
      throw new Error();
  }
}
