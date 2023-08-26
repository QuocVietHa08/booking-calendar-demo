import React, { lazy, Suspense } from 'react';
import Cookies from 'js-cookie';
import PageHeader from 'components/admin/PageHeader';
import SideNav from 'components/admin/SideNav';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './authWrapper.module.scss';
import { useQuery } from 'react-query';
import { getProfile } from 'api/profile';
import useProfile from 'hooks/useProfile';

const Tasks = lazy(() => import('pages/Tasks'));

export default function PageWrapper() {
  const isAuthenticated = !!Cookies.get('token');
  const { profile } = useProfile(isAuthenticated);

  if (!isAuthenticated) return <Redirect to="/login" />;
  if (!profile) return <Redirect to="profile" />;
  return (
    <div className={styles.pageWrapper}>
      <SideNav />
      <div className={styles.mainWrapper}>
        <PageHeader />
        <div className={styles.pageContent}>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/admin/tasks" component={Tasks} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
