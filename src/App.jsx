import React, { lazy, Suspense } from 'react';
import {
  HashRouter, Route, Switch, useLocation,
} from 'react-router-dom';
import './i18n/i18n';
import { LoaderCircle } from './components';
import './App.css';

const Illustrations = lazy(() => import('./screens/Illustrations/Illustrations'));
const Animations = lazy(() => import('./screens/Animations/Animations'));
const Main = lazy(() => import('./screens/Main/Main'));

const useQuery = () => new URLSearchParams(useLocation().search);

const FallBack = () => (
  <div className="fallback-style">
    <LoaderCircle />
  </div>
);

const QueryScreen = () => {
  const query = useQuery();
  return (
    <Switch>
      <Route key="root" path="/" exact render={() => <Main page={query.get('page')} section={query.get('section')} />} />
      <Route key="illustrations" path="/illustrations" exact render={() => <Illustrations />} />
      <Route key="animations" path="/animations" exact render={() => <Animations />} />
      <Route key="root-locale" path="/:locale/" exact render={() => <Main page={query.get('page')} section={query.get('section')} />} />
    </Switch>
  );
};

const App = () => (
  <Suspense fallback={<FallBack />}>
    <HashRouter>
      <QueryScreen />
    </HashRouter>
  </Suspense>
);

export default App;
