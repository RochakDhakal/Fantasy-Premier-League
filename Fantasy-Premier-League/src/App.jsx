import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/body/Home";
import Header from "./components/header/Header";
import PageNotFound from "./components/body/404";
import FPL from "./components/body/FPL";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fplstats" element={<FPL/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
