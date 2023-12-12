import Default from "../layouts/Default";
import { AddIcon } from "../components/Icons/ProviderIcons";
import { useContext, useState } from "react";
import AddProviderModal from "../components/AddProviderModal";
import ProviderCard from "../components/ProviderCard";
import { GlobalContext } from "../store/store";

const Provider = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const { providers } = useContext(GlobalContext);

  return (
    <Default>
      <div className="flex flex-col px-4 h-full">
        <main className="flex-grow">
          <div className="py-4 text-3xl mb-8">
            <h1>Providers</h1>
          </div>
          <div className="flex flex-col gap-4">
            {providers.length !== 0 ? (
              providers.map((provider) => (
                <ProviderCard key={provider.id} {...provider} />
              ))
            ) : (
              <div>You have no providers !</div>
            )}
          </div>
        </main>
        {isOpen && <AddProviderModal toggleModal={toggleModal} />}
        <div className="flex">
          <div className="flex-grow"></div>
          <button
            className="px-4 py-4 bg-[#bcfb08] rounded-lg mb-6"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </Default>
  );
};

export default Provider;
