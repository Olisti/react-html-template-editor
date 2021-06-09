import { ITemplate } from '@/types/template';

export default {
  id: null,
  name: 'New template',
  html: `<div>
    <button data-block="button" class="button" style="background-color: red; border: 1px solid blue; padding: 20px" type="button" disabled>Button</button>
    <p>Text</p>
</div>`,
} as ITemplate;
