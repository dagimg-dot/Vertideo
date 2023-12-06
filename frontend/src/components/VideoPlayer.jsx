import { useRef, useState } from "react";

const VideoPlayer = ({ id, author, src }) => {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoElement } = video;
    playing ? videoElement.pause() : videoElement.play();
    setPlaying(!playing);
  };

  return (
    <div className="relative h-[inherit]">
      <video
        className="w-full h-full object-contain"
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      ></video>
    </div>
  );
};

export default VideoPlayer;
