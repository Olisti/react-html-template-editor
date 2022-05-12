import { ITemplate } from './TemplateEditor.types';

export const DEFAULT_TEMPLATE: ITemplate = {
  id: null,
  name: 'New template',
  html: `<div style="margin: 50px"> 
  <div data-block="container" style="padding: 20px">
    <button data-block="button" style="background-color: red; border: 1px solid blue; padding: 20px;">Container button 1</button>
    <button data-block="button">Container button 2</button>
  </div>
</div>`,
};
