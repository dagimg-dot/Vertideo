import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Provider from "./pages/Provider";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/provider" element={<Provider />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;
