import React, { VFC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { TEMPLATE_CREATE_ROUTE, TEMPLATE_LIST_ROUTE } from './Router.constants';
import { PageNotFound } from './pages/PageNotFound';
import { TemplateEditor } from './pages/TemplateEditor';
import { TemplateList } from './pages/TemplateList';

export const Router: VFC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={TEMPLATE_LIST_ROUTE} />
      <Redirect exact from="/template" to={TEMPLATE_LIST_ROUTE} />
      <Route path={TEMPLATE_LIST_ROUTE} exact component={TemplateList} />
      <Route path={TEMPLATE_CREATE_ROUTE} exact component={TemplateEditor} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
