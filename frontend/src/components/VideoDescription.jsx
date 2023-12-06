const VideoDescription = ({ description }) => {
  const videoName = description.src.split("/").pop();

  return (
    <div className="text-white text-lg flex flex-col justify-between gap-2 absolute bottom-0 w-full z-10 p-4">
      <div className="font-bold text-xl">{description.folder}</div>
      <div>{videoName}</div>
    </div>
  );
};

export default VideoDescription;
