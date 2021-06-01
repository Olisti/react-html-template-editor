import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TemplateEditor from './templates/editor/TemplateEditor';
import TemplateList from './templates/list/TemplateList';

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/templates/list" />
      <Redirect exact from="/templates" to="/templates/list" />
      <Route path="/templates/list" exact component={TemplateList} />
      <Route path="/templates/editor" exact component={TemplateEditor} />
    </Switch>
  );
}
