const ProviderCard = ({ folderName, URL }) => {
  return (
    <div className="flex justify-between bg-[#181f21] p-4 rounded-lg items-center shadow-md">
      <div>
        <h1 className="text-lg font-bold">{folderName}</h1>
        <span>{URL}</span>
      </div>
      <div className="flex gap-2">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProviderCard;
