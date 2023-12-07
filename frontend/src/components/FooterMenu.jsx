import { Activity, Home, Profile, Search } from "./Icons/FooterMenuIcons";

const white = "#fff";
const FooterMenu = () => {
  return (
    <footer className="flex items-center justify-between w-full bg-black px-4">
      <a className="flex items-center justify-center p-2" href="#">
        <Home color={white} solid={true} />
      </a>
      <a className="flex items-center justify-center p-2" href="#">
        <Search color={white} />
      </a>
      <a className="flex items-center justify-center p-2" href="#">
        <Activity color={white} />
      </a>
      <a className="flex items-center justify-center p-2" href="#">
        <Profile color={white} />
      </a>
    </footer>
  );
};

export default FooterMenu;
