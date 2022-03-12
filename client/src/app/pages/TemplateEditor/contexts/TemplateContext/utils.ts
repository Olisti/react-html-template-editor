import { ITemplateAction, ITemplateState } from './types';

export function reducer(state: ITemplateState, action: ITemplateAction): ITemplateState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_HTML':
      return { ...state, html: action.payload };
    default:
      throw new Error();
  }
}
