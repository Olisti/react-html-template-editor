import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import TemplateEditor from './pages/TemplateEditor';
import TemplateList from './pages/TemplateList';

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
