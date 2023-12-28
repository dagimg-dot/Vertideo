import { Link } from "react-router-dom";

const VideoCard = ({ video, token }) => {
  const videoName = video.src.split("/").pop();

  const idx = videoName.search(token);
  const first = videoName.substring(0, idx);
  const second = videoName.substring(idx + token.length);

  return (
    <Link key={video.src} to={`/#${video.id}`} className="cursor-pointer">
      <div className="flex bg-[#181f21] p-3 rounded-lg items-center shadow-md gap-4">
        <img
          src={video.thumbnail}
          alt={video.src}
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col">
          <div className="flex">
            <span>{first}</span>
            <span className="bg-[#bcfb08] text-[#101115]">{token}</span>
            <span>{second}</span>
          </div>
          <span>{video.folder}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
