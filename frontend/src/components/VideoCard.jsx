const VideoCard = ({ video, token }) => {
  const videoName = video.src.split("/").pop();

  const idx = videoName.search(token);
  const first = videoName.substring(0, idx);
  const second = videoName.substring(idx + token.length);

  return (
    <div className="flex bg-[#181f21] p-3 rounded-lg items-center shadow-md gap-4">
      {/* This is for video thumbnail*/}
      <div className=" bg-slate-700 p-4 rounded-md">T</div>
      <div className="flex flex-col">
        <div className="flex">
          <span>{first}</span>
          <span className="bg-[#bcfb08] text-[#101115]">{token}</span>
          <span>{second}</span>
        </div>
        <span>{video.folder}</span>
      </div>
    </div>
  );
};

export default VideoCard;
