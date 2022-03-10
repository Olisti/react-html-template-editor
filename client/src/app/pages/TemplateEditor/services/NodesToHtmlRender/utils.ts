import { html_beautify } from 'js-beautify';

export function htmlBeautify(code: string) {
  return html_beautify(code, {
    inline: [],
  });
}
