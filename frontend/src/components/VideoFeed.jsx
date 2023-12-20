import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import Loader from "./Loader";
import { Error } from "./Icons/PlayerIcons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../store/store";

const VideoFeed = () => {
  const [isLoading, error, Videos] = useVideos();
  const [allVideos, setAllVideos] = useState([]);
  const { providers } = useContext(GlobalContext);

  useEffect(() => {
    const getAllVideos = () => {
      let allVideos = [];

      providers.map((provider) => {
        if (provider.videos.length > 0) {
          allVideos = [...allVideos, ...provider.videos];
        }
      });

      return allVideos;
    };

    setAllVideos(getAllVideos());
  }, []);

  if (isLoading) {
    return <Loader message={"Fetching your videos..."} />;
  }

  if (error !== "") {
    return (
      <div className="flex flex-col gap-4 w-full items-center justify-center mt-24">
        <Error />
        <span>{error}</span>
      </div>
    );
  }

  if (providers.length !== 0) {
    return allVideos.map((video) => {
      return (
        <div
          key={video.src}
          className="w-full h-full snap-center scroll-smooth"
        >
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
