import { useRef, useState } from "react";
import Actions from "./Actions";
import VideoDescription from "./VideoDescription";

const VideoPlayer = ({ folder, src }) => {
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
      />
      <Actions />
      <VideoDescription description={{ folder, src }} />
    </div>
  );
};

export default VideoPlayer;
