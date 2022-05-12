import { createContext } from 'react';

import { IEditorContext } from './EditorProvider.types';

export const EditorContext = createContext({} as IEditorContext);
