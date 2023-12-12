import { useRef, useState } from "react";

const ProviderCard = ({ id, foldername, hostname, port }) => {
  const [isHidden, setIsHidden] = useState(true);
  const DML = useRef(null);

  const handleCardClick = (event) => {
    if (event.target.parentNode !== DML.current) {
      setIsHidden(!isHidden);
    }
  };

  const getDots = (str) => {
    return str.split("").map((s) => "•");
  };

  const constructURL = (hostname, port) => {
    return hostname + ":" + port;
  };

  return (
    <div
      className="flex justify-between bg-[#181f21] p-4 rounded-lg items-center shadow-md"
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
      <div className="flex gap-2" ref={DML}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProviderCard;
