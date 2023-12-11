import { useState } from "react";

const ProviderCard = ({ folderName, URL }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleCardClick = () => {
    setIsHidden(!isHidden);
  };

  const getDots = (str) => {
    return str.split("").map((s) => "•");
  };

  return (
    <div
      className="flex justify-between bg-[#181f21] p-4 rounded-lg items-center shadow-md"
      onClick={handleCardClick}
    >
      <div>
        <h1 className="text-lg font-bold">{folderName}</h1>
        <span> {isHidden ? getDots(URL) : URL}</span>
      </div>
      <div className="flex gap-2">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProviderCard;
