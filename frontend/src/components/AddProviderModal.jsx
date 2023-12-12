import { useContext, useState } from "react";
import { GlobalContext } from "../store/store";

const AddProviderModal = ({ toggleModal }) => {
  const [hostname, setHostname] = useState("");
  const [port, setPort] = useState("");
  const [foldername, setFoldername] = useState("");

  const { AddProvider } = useContext(GlobalContext);

  const handleSaveClick = (event) => {
    event.preventDefault();
    const formData = { hostname, port, foldername };

    AddProvider(formData);

    toggleModal();
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-[#181f21] rounded-lg text-lg text-[#bbb] shadow-lg shadow-black">
      <form className="flex flex-col gap-4" onSubmit={handleSaveClick}>
        <div>
          <label htmlFor="hostname">Hostname</label>
          <input
            type="text"
            value={hostname}
            placeholder="192.168.1.5"
            className=" placeholder:opacity-40"
            onChange={(e) => setHostname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="port">Port</label>
          <input
            type="text"
            value={port}
            placeholder="8081"
            className=" placeholder:opacity-40"
            onChange={(e) => setPort(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="folder">Folder Name</label>
          <input
            type="text"
            value={foldername}
            placeholder="Videos"
            className=" placeholder:opacity-40"
            onChange={(e) => setFoldername(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            className=" border-2 border-[#bbb] px-4 py-2 rounded-lg"
            onClick={toggleModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#bcfb08] text-[#101115] px-4 py-2 rounded-lg font-bold shadow-md shadow-[#181f21]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProviderModal;
