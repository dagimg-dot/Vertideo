import { useContext } from "react";
import { Separator } from "./Icons/PlayerIcons";
import { GlobalContext } from "../store/store";

const Header = () => {
  const {toggleClicked} = useContext(GlobalContext)
  const handleClick = (event) => {
    event.target.innerHTML === 'Favorites' ? toggleClicked(true) : toggleClicked(false)
  }
  return (
    <header className="text-white absolute top-0 z-10 flex items-center w-full p-6 bottom-0 h-8 bg-gradient-to-b from-[#101115] to-transparent">
      <nav className="flex items-center gap-4 pointer-events-auto absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        <a href="#" onClick={(event) => handleClick(event)}>All</a>
        <Separator />
        <a href="#" onClick={(event) => handleClick(event)}>Favorites</a>
      </nav>
    </header>
  );
};

export default Header;
