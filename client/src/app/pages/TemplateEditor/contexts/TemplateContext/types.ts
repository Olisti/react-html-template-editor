import { IEditorData, ITemplate } from '../..';
import { IEditorNodeEl } from '../EditorContext';

export interface ITemplateProviderProps {
  template?: ITemplate | null;
  saveHandler?: (data: IEditorData) => void;
  children: React.ReactNode;
}
export interface ITemplateContext extends ITemplateState {
  setName: (name: string) => void;
  setHtml: (html: string) => void;
  renderHtml: (domTree: IEditorNodeEl | null) => void;
  setCodeChanged: () => void;
  onSave: () => void;
}

export type ITemplateState = IEditorData;

export interface ITemplateAction {
  type: 'SET_NAME' | 'SET_HTML';
  payload: any;
}
