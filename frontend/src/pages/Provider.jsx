import Default from "../layouts/Default";
import { Add } from "../components/Icons/ProviderIcons";
import { useState } from "react";
import AddProviderModal from "../components/AddProviderModal";

const Provider = () => {
  const [isOpen, setOpen] = useState(false);
  const handleAddClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Default>
      <div className="flex flex-col h-screen px-4">
        <main className="flex-grow">main</main>
        {isOpen && <AddProviderModal onClick={handleAddClick} />}
        <div className="mb-14 flex">
          <div className="flex-grow"></div>
          <button
            className="px-4 py-4 bg-black rounded-lg mb-4"
            onClick={handleAddClick}
          >
            <Add />
          </button>
        </div>
      </div>
    </Default>
  );
};

export default Provider;
