import Default from "../layouts/Default";
import { AddIcon, SettingsIcon } from "../components/Icons/ProviderIcons";
import { useContext, useRef, useState } from "react";
import AddProviderModal from "../components/AddProviderModal";
import ProviderCard from "../components/ProviderCard";
import { GlobalContext } from "../store/store";
import SettingsModal from "../components/SettingsModal";
import { Toaster } from "react-hot-toast";

const Provider = () => {
  const { providers } = useContext(GlobalContext);
  const [isAddOpen, setAddOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const settingBtn = useRef(null);

  const toggleSettingsModal = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <Default>
      <Toaster />
      <div className="flex flex-col h-full">
        <main>
          <div className="flex justify-between w-full p-4 text-[26px] mb-8 items-center fixed top-0 bg-[#101115]">
            <h1>Providers</h1>
            <div onClick={toggleSettingsModal} ref={settingBtn}>
              <SettingsIcon />
            </div>
          </div>
          <div className="flex flex-col gap-4 my-24 px-4">
            {providers.length !== 0 ? (
              providers.map((provider) => (
                <ProviderCard key={provider.id} {...provider} />
              ))
            ) : (
              <div className="text-center">You have no providers !</div>
            )}
          </div>
        </main>
        {isAddOpen && (
          <AddProviderModal toggleModal={() => setAddOpen(!isAddOpen)} />
        )}
        {isSettingsOpen && (
          <SettingsModal
            toggleModal={toggleSettingsModal}
            btnRef={settingBtn}
          />
        )}
        <div className="flex">
          <div className="flex-grow"></div>
          <button
            className="px-4 py-4 bg-[#bcfb08] rounded-lg mb-6 fixed bottom-12 right-4"
            onClick={() => setAddOpen(true)}
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </Default>
  );
};

export default Provider;
