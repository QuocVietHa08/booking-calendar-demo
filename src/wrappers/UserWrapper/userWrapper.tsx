import React, { lazy, Suspense } from 'react';
import Header from 'components/user/Header/header';
import { Route, Switch } from 'react-router-dom';
import styles from './userWrapper.module.scss';

const Home = lazy(() => import('pages/Home/home'));

export default function UserPageWrapper() {

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.pageContent}>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
