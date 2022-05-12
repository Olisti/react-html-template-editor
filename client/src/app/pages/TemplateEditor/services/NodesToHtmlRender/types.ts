import { IEditorNodeEl } from '../../providers/EditorProvider';

export interface IRenderNodesToHtml {
  setHtml: (html: string) => void;
  domTree: IEditorNodeEl | null;
}
