const VideoDescription = ({ description }) => {
  const videoName = description.src.split("/").pop();

  return (
    <div className="text-white text-lg flex flex-col gap-2 absolute bottom-14 p-1">
      <div className="font-bold text-xl">📁 {description.folder}</div>
      <div>📹 {videoName}</div>
    </div>
  );
};

export default VideoDescription;
