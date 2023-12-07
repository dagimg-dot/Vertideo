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
      (videoElement.duration * event.target.value) / 100;

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
    const inputPosition = Math.floor(
      (event.target.currentTime / videoElement.duration) * 100
    );
    const currentTime = formatTime(event.target.currentTime);
    setCurrentTime(currentTime);
    setPosition(inputPosition);
  };

  const handleMetaData = () => {
    setDuration(formatTime(video.current.duration));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.current.play();
        } else {
          video.current.pause();
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (video.current) {
      observer.observe(video.current);
    }

    return () => {
      if (video.current) {
        observer.unobserve(video.current);
      }
    };
  }, []);

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
        onLoadedMetadata={handleMetaData}
      />
      <Actions />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <VideoDescription description={{ folder, src }} />
      <SeekBar
        className={"absolute -bottom-1 px-3 w-full accent-[white]"}
        value={position}
        onChange={handleChange}
        currentTime={currentTime}
        duration={duration}
      />
    </div>
  );
};

export default VideoPlayer;
