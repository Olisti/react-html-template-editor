import { createContext } from 'react';

import { ITemplateContext } from './TemplateProvider.types';

export const TemplateContext = createContext({} as ITemplateContext);
