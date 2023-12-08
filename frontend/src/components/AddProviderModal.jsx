import { useState } from "react";

const AddProviderModal = ({ onClick }) => {
  const [hostname, setHostname] = useState("");
  const [port, setPort] = useState("");
  const [foldername, setFoldername] = useState("");

  const handleSaveClick = (event) => {
    event.preventDefault();
    const formData = { hostname, port, foldername };
    console.log(formData);
  };
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-lg text-lg">
      <form className="flex flex-col gap-4 mb-4">
        <div>
          <label htmlFor="hostname">Hostname</label>
          <input
            type="text"
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="port">Port</label>
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="folder">Folder Name</label>
          <input
            type="text"
            value={foldername}
            onChange={(e) => setFoldername(e.target.value)}
          />
        </div>
      </form>
      <div className="flex">
        <div className="flex-grow"></div>
        <div className="flex gap-2">
          <button type="submit" onClick={handleSaveClick}>
            Save
          </button>
          <button onClick={onClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProviderModal;
