import { ITemplate } from '@/types/template';

export default {
  id: null,
  name: 'New template',
  html: `<div style="margin: 50px">
    <button data-block="button" type="button" class="button" style="background-color: red; border: 1px solid blue; padding: 20px;">Button</button>
    <button data-block="button">Button2</button>
    <button data-block="button">Button3</button>
    <p>Text</p>
</div>`,
} as ITemplate;
