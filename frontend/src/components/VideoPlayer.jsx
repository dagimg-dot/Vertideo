import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Actions from "./Actions";
import VideoDescription from "./VideoDescription";
import SeekBar from "./SeekBar";
import { FeedIcon } from "./Icons/FooterMenuIcons";
import { GlobalContext } from "../store/store";

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
  const { likedVideos } = useContext(GlobalContext);
  const colorFill = useMemo(() => {
    return likedVideos.includes(src) ? "red" : "white";
  }, [likedVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.current.play();
          setPlaying(true);
        } else {
          video.current.pause();
          setPlaying(false);
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

      <Actions colorFill={colorFill} src={src} />
      {!playing && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">
          <FeedIcon color={"white"} solid={true} className={"w-24 h-24"} />
        </div>
      )}
      <div className="absolute bottom-0 w-full min-h-[180px] bg-gradient-to-t from-[#101115] to-transparent"></div>
      <VideoDescription description={{ folder, src }} />
      <SeekBar
        className={"flex flex-col absolute bottom-0 w-full gap-1"}
        value={position}
        onChange={handleChange}
        currentTime={currentTime}
        duration={duration}
      />
    </div>
  );
};

export default VideoPlayer;
