import React, { lazy, Suspense } from "react";
import PageHeader from "components/admin/PageHeader";
import SideNav from "components/admin/SideNav";
import { Redirect, Switch, useLocation } from "react-router-dom";
import styles from "./authWrapper.module.scss";
import PrivateRoute from "./PrivateRoute";
import Cookies from "js-cookie";
import { history } from "App";

const Tasks = lazy(() => import("pages/admin/Tasks"));
const Login = lazy(() => import("pages/admin/Login/login"));
const Home = lazy(() => import("pages/admin/Home/home"));
const Setting = lazy(() => import("pages/admin/Setting/setting"));

export default function AuthWrapper() {
  const location = useLocation();
  const isLogin = location.pathname === "/admin/login";

  return (
    <div className={styles.pageWrapper}>
      {!isLogin && <SideNav />}
      <div className={styles.mainWrapper}>
        {!isLogin && <PageHeader />}
        <div className={styles.pageContent}>
          <Suspense fallback={null}>
            <Switch>
              <PrivateRoute path="/admin/login" component={Login} />
              <PrivateRoute path="/admin/tasks" component={Tasks} />
              <PrivateRoute path="/admin/setting" component={Setting} />
              <PrivateRoute path="/admin" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
