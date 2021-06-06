import { IEditorState } from './EditorProvider';

export interface IEditorAction {
  type: 'SET_NAME' | 'SET_HTML';
  payload: any;
}

export function reducer(state: IEditorState, action: IEditorAction) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_HTML':
      return { ...state, html: action.payload };
    default:
      throw new Error();
  }
}
