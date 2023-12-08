import { Activity, Home, Search } from "./Icons/FooterMenuIcons";
import { Link, useLocation } from "react-router-dom";

const white = "#fff";
const FooterMenu = () => {
  const { pathname } = useLocation();

  const makeSolid = (path) => {
    return pathname === path;
  };

  return (
    <nav className="flex items-center justify-between w-full bg-black px-4">
      <Link to="/provider" className="flex items-center justify-center p-2">
        <Home color={white} solid={makeSolid("/provider")} />
      </Link>
      <Link to="/" className="flex items-center justify-center p-2">
        <Activity color={white} solid={makeSolid("/")} />
      </Link>
      <Link to="/search" className="flex items-center justify-center p-2">
        <Search color={white} solid={makeSolid("/search")} />
      </Link>
    </nav>
  );
};

export default FooterMenu;
