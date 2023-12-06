import VideoPlayer from "./VideoPlayer";

const Videos = [
  {
    id: 1,
    folder: "assets",
    src: "../../src/assets/video.mp4",
  },
  {
    id: 2,
    folder: "assets",
    src: "../../src/assets/video.mp4",
  },
  {
    id: 3,
    folder: "assets",
    src: "../../src/assets/video.mp4",
  },
  {
    id: 4,
    folder: "assets",
    src: "../../src/assets/video.mp4",
  },
];

const VideoFeed = () => {
  return Videos.map((video) => {
    return (
      <div key={video.id} className="w-full h-full snap-center scroll-smooth">
        <VideoPlayer {...video} />
      </div>
    );
  });
};

export default VideoFeed;
