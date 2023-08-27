import React, { lazy, Suspense } from 'react';
import Header from 'components/user/Header/header';
import Footer from 'components/user/Footer/footer';
import { Route, Switch } from 'react-router-dom';
import styles from './userWrapper.module.scss';
import { useAppStore } from 'store/useApp';
const Home = lazy(() => import('pages/user/Home/home'));
const Blog = lazy(() => import('pages/user/Blog/blog'));

export default function UserPageWrapper() {
  const { mode } = useAppStore();

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={`${styles.mainWrapper} ${mode === 'dark' ? styles.mainWrapperDarkModal : ''}`}>
        <div className={styles.pageContent}>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}
