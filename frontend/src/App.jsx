import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Provider from "./pages/Provider";
import Search from "./pages/Search";
import { GlobalProvider } from "./store/store";
import useDarkMode from "./hooks/useDarkMode";
import { useEffect } from "react";

const App = () => {
  const root = window.document.documentElement;
  localStorage.getItem("theme") === null
    ? root.classList.add("Dark")
    : root.classList.add(localStorage.getItem("theme"));

  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </GlobalProvider>
  );
};

export default App;
