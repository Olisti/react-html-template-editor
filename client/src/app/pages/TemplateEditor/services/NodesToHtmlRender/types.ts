import { IEditorNodeEl } from '../../contexts/EditorContext';

export interface IRenderNodesToHtml {
  setHtml: (html: string) => void;
  domTree: IEditorNodeEl | null;
}
