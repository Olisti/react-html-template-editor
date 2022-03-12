import ReactDOM from 'react-dom';

import { htmlBeautify } from './utils';
import { IRenderNodesToHtml } from './types';
import { EditorProvider } from '../../contexts/EditorContext';

export function renderNodesToHtml({ setHtml, domTree }: IRenderNodesToHtml) {
  const container = document.createElement('div');
  ReactDOM.render(<EditorProvider isPreview={false}>{domTree}</EditorProvider>, container);

  setImmediate(() => {
    const newHtml = htmlBeautify(decodeHTMLEntities(container.innerHTML));
    setHtml(newHtml);
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
