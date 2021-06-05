import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from './pages/404/PageNotFound';
import TemplateEditor from './pages/template-editor/TemplateEditor';
import TemplateList from './pages/template-list/TemplateList';

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/template/list" />
      <Redirect exact from="/template" to="/template/list" />
      <Route path="/template/list" exact component={TemplateList} />
      <Route path="/template/editor" exact component={TemplateEditor} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
