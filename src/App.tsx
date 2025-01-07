import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "@components/loader";
const Home = lazy(() => import("@components/homeComponents"));
const Projects = lazy(() => import("@components/projectComponents/Projects"));
const Header = lazy(() => import("@components/Header"));

function App() {
  return (
    <div className="workSpace">
      <div className="headerSpace">
        <Header />
      </div>
      <div className="contentSpace">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
