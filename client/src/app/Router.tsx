import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from './pages/404/PageNotFound';
import TemplateEditor from './pages/template-editor/TemplateEditor';
import TemplateList from './pages/template-list/TemplateList';

export const TEMPLATE_LIST_ROUTE = '/template/list';
export const TEMPLATE_CREATE_ROUTE = '/template/editor';

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to={TEMPLATE_LIST_ROUTE} />
      <Redirect exact from="/template" to={TEMPLATE_LIST_ROUTE} />
      <Route path={TEMPLATE_LIST_ROUTE} exact component={TemplateList} />
      <Route path={TEMPLATE_CREATE_ROUTE} exact component={TemplateEditor} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
