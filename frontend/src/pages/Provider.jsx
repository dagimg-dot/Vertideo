import Default from "../layouts/Default";
import { Add } from "../components/Icons/ProviderIcons";
import { useState } from "react";
import AddProviderModal from "../components/AddProviderModal";
import ProviderCard from "../components/ProviderCard";

const Provider = () => {
  const [isOpen, setOpen] = useState(false);
  const handleAddClick = () => {
    setOpen(!isOpen);
  };

  const providers = [
    { folderName: "Videos", URL: "192.168.1.5:8081" },
    { folderName: "Assets", URL: "192.168.1.5:8081" },
    { folderName: "Gallery", URL: "192.168.1.5:8081" },
    { folderName: "Trailers", URL: "192.168.1.5:8081" },
    { folderName: "Snapchat", URL: "192.168.1.5:8081" },
  ];

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
                <ProviderCard key={provider.folderName} {...provider} />
              ))
            ) : (
              <div>You have no providers !</div>
            )}
          </div>
        </main>
        {isOpen && <AddProviderModal onClick={handleAddClick} />}
        <div className="flex">
          <div className="flex-grow"></div>
          <button
            className="px-4 py-4 bg-[#bcfb08] rounded-lg mb-6"
            onClick={() => setOpen(true)}
          >
            <Add />
          </button>
        </div>
      </div>
    </Default>
  );
};

export default Provider;
