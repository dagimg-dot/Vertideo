import VideoPlayer from "./VideoPlayer";

const Videos = [
  {
    id: 1,
    author: "penelope",
    src: "../../src/assets/video.mp4",
  },
  {
    id: 2,
    author: "penelope",
    src: "../../src/assets/video.mp4",
  },
  {
    id: 3,
    author: "penelope",
    src: "../../src/assets/video.mp4",
  },
];

const VideoFeed = () => {
  return Videos.map((video) => {
    return (
      <div key={video.id} className="w-full h-full snap-center">
        <VideoPlayer {...video} />
      </div>
    );
  });
};

export default VideoFeed;
