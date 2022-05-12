import { Reducer, VFC, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { renderNodesToHtml } from '../../services/NodesToHtmlRender';
import { IEditorNodeEl } from '../EditorProvider';
import { INITIAL_STATE } from './TemplateProvider.constants';
import { TemplateContext } from './TemplateProvider.context';
import { reducer } from './TemplateProvider.helpers';
import {
  ITemplateAction,
  ITemplateContext,
  ITemplateProviderProps,
  ITemplateState,
} from './TemplateProvider.types';

export const TemplateProvider: VFC<ITemplateProviderProps> = ({
  template,
  saveHandler,
  children,
}) => {
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

  const onSave = useCallback(
    () => saveHandler?.({ html: state.html, name: state.name }),
    [state.html, state.name, saveHandler]
  );

  const value: ITemplateContext = useMemo(
    () => ({
      ...state,
      setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
      setHtml,
      renderHtml,
      onSave,
      setCodeChanged,
    }),
    [state, onSave]
  );

  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};
