import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Provider from "./pages/Provider";
import Search from "./pages/Search";
import { GlobalProvider } from "./store/store";

const App = () => {
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
