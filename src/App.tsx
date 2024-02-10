import React, { lazy, Suspense } from 'react';
import {
  HashRouter, Route, Switch, useLocation,
} from 'react-router-dom';
import './i18n/i18n';
import { LoaderCircle } from './components';
import './App.css';
import {
  DEFAULT_SECTION, isPage, isSection,
} from './service/constants';

const Illustrations = lazy(() => import('./screens/Illustrations/Illustrations'));
const Animations = lazy(() => import('./screens/Animations/Animations'));
const Main = lazy(() => import('./screens/Main/Main'));

const useQuery = () => new URLSearchParams(useLocation().search);

const FallBack = () => (
  <div className="fallback-style">
    <LoaderCircle />
  </div>
);

export const getSection = (section: string | null) => (isSection(section) ? section : DEFAULT_SECTION);

export const getPage = (page: string | null) => (page && isPage(page) ? page : undefined);

const QueryScreen = () => {
  const query = useQuery();
  const page = getPage(query.get('page'));
  const section = getSection(query.get('section'));
  return (
    <Switch>
      <Route key="root" path="/" exact render={() => <Main page={page} section={section} />} />
      <Route key="illustrations" path="/illustrations" exact render={() => <Illustrations />} />
      <Route key="animations" path="/animations" exact render={() => <Animations />} />
      <Route key="root-locale" path="/:locale/" exact render={() => <Main page={page} section={section} />} />
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
