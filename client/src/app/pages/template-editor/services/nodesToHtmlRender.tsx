import ReactDOM from 'react-dom';
import { EditorProvider } from '../context/EditorProvider';
import { IEditorNodeEl } from '../context/types';
import { htmlBeautify } from './htmlBeautify';

interface IRenderNodesToHtml {
  setHtml: (html: string) => void;
  domTree: IEditorNodeEl | null;
}

export function renderNodesToHtml({ setHtml, domTree }: IRenderNodesToHtml) {
  const container = document.createElement('div');
  ReactDOM.render(<EditorProvider isPreview={false}>{domTree}</EditorProvider>, container);

  setImmediate(() => {
    setHtml(htmlBeautify(decodeHTMLEntities(container.innerHTML)));
  });
}

function decodeHTMLEntities(text: string) {
  const entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"'],
  ];
  for (let i = 0, max = entities.length; i < max; ++i)
    text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
  return text;
}
