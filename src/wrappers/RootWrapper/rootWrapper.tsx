import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthWrapper from 'wrappers/AuthWrapper/authWrapper';
import UserWapper from 'wrappers/UserWrapper/userWrapper';

export default function AppWrapper() {
  return (
    <div className="root-wrapper">
      <Switch>
        <Route path="/admin" component={AuthWrapper} />
        <Route path="/" component={UserWapper} />
      </Switch>
    </div>
  );
}
