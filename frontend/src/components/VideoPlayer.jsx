import { useEffect, useRef, useState } from "react";
import Actions from "./Actions";
import VideoDescription from "./VideoDescription";
import SeekBar from "./SeekBar";

const VideoPlayer = ({ folder, src }) => {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoElement } = video;
    playing ? videoElement.pause() : videoElement.play();
    setPlaying(!playing);
  };

  const handleChange = (event) => {
    const { current: videoElement } = video;
    videoElement.currentTime =
      videoElement.duration / (100 / event.target.value);

    console.log(videoElement.currentTime);
    setPosition(event.target.value);
  };

  const formatTime = (timeInSeconds) => {
    const result = new Date(timeInSeconds * 1000)
      .toISOString()
      .split("T")
      .pop()
      .split(".")[0];

    const times = result.split(":");

    return {
      minutes: times[times.length - 2],
      seconds: times[times.length - 1],
    };
  };

  const handleTimeUpdate = (event) => {
    const { current: videoElement } = video;
    setDuration(videoElement.duration);
    const inputPosition = Math.floor(
      (event.target.currentTime / videoElement.duration) * 100
    );
    const currentTime = formatTime(event.target.currentTime);
    setCurrentTime(currentTime);
    setPosition(inputPosition);
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
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(formatTime(video.current.duration))}
      />
      <Actions />
      <VideoDescription description={{ folder, src }} />
      <SeekBar
        className={"absolute bottom-0 w-full p-2 accent-[white]"}
        value={position}
        onChange={handleChange}
        currentTime={currentTime}
        duration={duration}
      />
    </div>
  );
};

export default VideoPlayer;
