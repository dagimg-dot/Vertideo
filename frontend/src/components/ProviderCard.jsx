import { useContext, useRef, useState } from "react";
import AddProviderModal from "./AddProviderModal";
import { GlobalContext } from "../store/store";
import { DeleteIcon, EditIcon } from "./Icons/ProviderIcons";

const ProviderCard = ({ id, foldername, hostname, port }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const DML = useRef(null);

  const { DeleteProvider } = useContext(GlobalContext);

  const formData = {
    id,
    hostname,
    foldername,
    port,
  };

  const handleCardClick = (event) => {
    if (event.target.parentNode !== DML.current) {
      setIsHidden(!isHidden);
    }
  };

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleDeleteClick = () => {
    DeleteProvider(id);
  };

  const getDots = (str) => {
    return str.split("").map((s) => "•");
  };

  const constructURL = (hostname, port) => {
    return hostname + ":" + port;
  };

  return (
    <div
      className="flex justify-between text-black dark:text-white bg-white dark:bg-[#181f21] p-4 rounded-lg items-center shadow-lg dark:shadow-md "
      onClick={handleCardClick}
    >
      <div>
        <h1 className="text-lg font-bold">{foldername}</h1>
        <span>
          {" "}
          {isHidden
            ? getDots(constructURL(hostname, port))
            : constructURL(hostname, port)}
        </span>
      </div>
      <div className="flex gap-4" ref={DML}>
        <button onClick={handleEditClick}>
          <EditIcon />
        </button>
        <button onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
      </div>
      {isOpen && (
        <AddProviderModal
          toggleModal={() => setOpen(false)}
          _formData={formData}
        />
      )}
    </div>
  );
};

export default ProviderCard;
