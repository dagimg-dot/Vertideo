const VideoCard = ({ folder, src }) => {
  return (
    <div className="flex bg-[#181f21] p-3 rounded-lg items-center shadow-md gap-4">
      {/* This is for video thumbnail*/}
      <div className=" bg-slate-700 p-4 rounded-md">T</div>
      <div className="flex flex-col">
        <span>{src.split("/").pop()}</span>
        <span>{folder}</span>
      </div>
    </div>
  );
};

export default VideoCard;
