import { IEditorNodeEl } from '../../context';

export interface IRenderNodesToHtml {
  setHtml: (html: string) => void;
  domTree: IEditorNodeEl | null;
}
