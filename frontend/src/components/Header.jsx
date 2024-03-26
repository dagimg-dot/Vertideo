import { useContext } from "react";
import { Separator } from "./Icons/PlayerIcons";
import { GlobalContext } from "../store/store";

const Header = () => {
  const { toggleClicked, isFavouriteClicked } = useContext(GlobalContext);

  const handleClick = (event) => {
    event.target.innerHTML === "Favorites"
      ? toggleClicked(true)
      : toggleClicked(false);
  };

  return (
    <header className="dark:text-white text-[#101115] absolute top-0 z-10 flex items-center w-full p-6 bottom-0 h-8 bg-white dark:bg-[#101115] dark:bg-gradient-to-b from-[#101115] to-transparent">
      <nav className="flex items-center gap-4 pointer-events-auto absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          onClick={handleClick}
          className={isFavouriteClicked ? "" : "dark:text-white text-[#101115] font-bold"}
        >
          All
        </span>
        <Separator />
        <span
          onClick={handleClick}
          className={isFavouriteClicked ? "dark:text-white text-[#101115] font-bold" : ""}
        >
          Favorites
        </span>
      </nav>
    </header>
  );
};

export default Header;
