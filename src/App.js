import "./App.css";
import { lazy, Suspense } from "react";

import Loading from "./components/Loading";
import Header from "./components/Header";
const Countrylist = lazy(() => import("./components/Countrylist"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Countrylist />
      </Suspense>
    </>
  );
}

export default App;
