import { IEditorNodeEl } from '../../context/types';

export interface IRenderNodesToHtml {
  setHtml: (html: string) => void;
  domTree: IEditorNodeEl | null;
}
