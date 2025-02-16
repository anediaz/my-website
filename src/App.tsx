import { lazy, Suspense, useEffect, useRef } from 'react';
import {
  HashRouter, Route, Routes, useLocation,
} from 'react-router-dom';
import './i18n/i18n';
import { LoaderCircle } from './components';
import './App.css';
import {
  DEFAULT_SECTION, isPage, isSection,
} from './service/constants';
import { startNewView } from 'instrument';
import { useCurrentUser } from 'hooks/useCurrentUser';
interface previousNavStateProps {
  pathName: string,
  page?: string,
}

const Illustrations = lazy(() => import('./screens/Illustrations/Illustrations'));
const Animations = lazy(() => import('./screens/Animations/Animations'));
const Main = lazy(() => import('./screens/Main/Main'));

const FallBack = () => (
  <div className="fallback-style">
    <LoaderCircle />
  </div>
);

const getSection = (section: string | null) => (isSection(section) ? section : DEFAULT_SECTION);

const getPage = (page: string | null) => (page && isPage(page) ? page : undefined);

const QueryScreen = () => {
  useCurrentUser();  // Handle user details in RUM

  const location = useLocation();
  const useQuery = () => new URLSearchParams(location.search);
  const query = useQuery();
  const page = getPage(query.get('page'));
  const previousPathRef = useRef<previousNavStateProps>({ pathName:''}); // we need to remember the previous path and page
 
  useEffect(() => { 
    // If the previous and the current states are different, we start a new view
    if (previousPathRef.current.pathName !== location.pathname || previousPathRef.current.page !== page) { 
      startNewView(location.pathname, page);
    }
    // Update the ref with the current state of the navigation 
    previousPathRef.current = { pathName: location.pathname, page }; 
  }, [location]); 

  const section = getSection(query.get('section'));
  return (
    <div className="App">
      <Routes>
        <Route key="root" path="/" element={<Main page={page} section={section} />} />
        <Route key="root-locale" path="/:locale" element={<Main page={page} section={section} />} />
        <Route key="illustrations" path="/illustrations" element={<Illustrations />} />
        <Route key="animations" path="/animations" element={<Animations />} />
      </Routes>
    </div>
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
