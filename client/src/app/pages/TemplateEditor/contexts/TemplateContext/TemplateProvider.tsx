import { Reducer, useEffect, useReducer, useRef, VFC } from 'react';

import { ITemplateAction, ITemplateContext, ITemplateProviderProps, ITemplateState } from './types';
import { reducer } from './utils';
import { INITIAL_STATE } from './consts';
import { TemplateContext } from './TemplateContext';
import { renderNodesToHtml } from '../../services/NodesToHtmlRender';
import { IEditorNodeEl } from '../EditorContext';

const TemplateProvider: VFC<ITemplateProviderProps> = ({ template, saveHandler, children }) => {
  const [state, dispatch] = useReducer<Reducer<ITemplateState, ITemplateAction>>(
    reducer,
    INITIAL_STATE
  );
  const isCodeChangedRef = useRef(false);

  useEffect(() => {
    dispatch({ type: 'SET_NAME', payload: template?.name || '' });
    dispatch({ type: 'SET_HTML', payload: template?.html || '' });
  }, [template]);

  const setHtml = (html: string) => {
    isCodeChangedRef.current = true;
    dispatch({ type: 'SET_HTML', payload: html });
  };

  const renderHtml = (domTree: IEditorNodeEl | null) => {
    if (isCodeChangedRef.current) return;
    renderNodesToHtml({
      domTree,
      setHtml: (html: string) => {
        dispatch({ type: 'SET_HTML', payload: html });
      },
    });
  };

  const setCodeChanged = () => {
    isCodeChangedRef.current = false;
  };

  const onSave = () => saveHandler && saveHandler({ html: state.html, name: state.name });

  const value: ITemplateContext = {
    ...state,
    setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
    setHtml,
    renderHtml,
    onSave,
    setCodeChanged,
  };

  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};

export default TemplateProvider;
