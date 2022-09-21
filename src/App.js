import './App.css';
import { lazy, Suspense } from 'react';

import Loading from './components/Loading';
const Countrylist = lazy(() => import("./components/Countrylist"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Countrylist />
    </Suspense>
  );
}

export default App;
