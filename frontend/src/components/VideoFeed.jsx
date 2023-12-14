import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import Loader from "./Loader";

// Test

// const Videos = [
//   {
//     id: 1,
//     folder: "assets",
//     src: "../../src/assets/video3.mp4",
//   },
//   {
//     id: 2,
//     folder: "assets",
//     src: "../../src/assets/video.mp4",
//   },
//   {
//     id: 3,
//     folder: "assets",
//     src: "../../src/assets/video3.mp4",
//   },
//   {
//     id: 4,
//     folder: "assets",
//     src: "../../src/assets/vvideo.mp4",
//   },
// ];

const VideoFeed = () => {
  const [isLoading, error, Videos] = useVideos();

  if (isLoading) {
    return <Loader message={"Fetching your videos..."} />;
  }

  if (error !== "") {
    return <div>{error}</div>;
  }

  if (Videos.length !== 0) {
    return Videos.map((video) => {
      return (
        <div key={video.id} className="w-full h-full snap-center scroll-smooth">
          <VideoPlayer {...video} />
        </div>
      );
    });
  } else {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full p-10">
        You don't have any providers. Go to the{" "}
        <Link to="/provider" className="text-blue-400">
          provider
        </Link>{" "}
        page and add at least one provider.
      </div>
    );
  }
};

export default VideoFeed;
