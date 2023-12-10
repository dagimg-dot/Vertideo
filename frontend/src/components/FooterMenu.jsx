import { FeedIcon, ProviderIcon, SearchIcon } from "./Icons/FooterMenuIcons";
import { Link, useLocation } from "react-router-dom";

const FooterMenu = () => {
  const { pathname } = useLocation();

  const makeSolid = (path) => {
    return pathname === path;
  };

  return (
    <nav className="flex items-center justify-between w-full bg-[#101115] px-4 border-t-2 border-[#181f21]">
      <Link to="/provider" className="flex items-center justify-center p-3">
        <ProviderIcon color={"white"} solid={makeSolid("/provider")} />
      </Link>
      <Link to="/" className="flex items-center justify-center p-3">
        <FeedIcon color={"white"} solid={makeSolid("/")} />
      </Link>
      <Link to="/search" className="flex items-center justify-center p-3">
        <SearchIcon color={"white"} solid={makeSolid("/search")} />
      </Link>
    </nav>
  );
};

export default FooterMenu;
