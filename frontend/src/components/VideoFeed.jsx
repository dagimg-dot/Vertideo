import VideoPlayer from "./VideoPlayer";
import { Link, useLocation } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import Loader from "./Loader";
import { Error } from "./Icons/PlayerIcons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";
import { Toaster } from "react-hot-toast";
import mergeVideos from "../utils/mergeVideos";

const VideoFeed = () => {
  const [isLoading, error] = useVideos();
  const { providers, isFavouriteClicked, likedVideos } =
    useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash !== "") {
      const videoElement = document.getElementById(hash.split("#").pop());
      videoElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  if (isLoading) {
    return <Loader message={"Fetching your videos..."} />;
  }

  if (error !== "") {
    return (
      <div className="flex flex-col gap-4 w-full items-center justify-center mt-24">
        <Error />
        <span className="px-4 text-center">{error}</span>
      </div>
    );
  } else if (providers.length !== 0) {
    const allVideos = mergeVideos(providers);
    if (isFavouriteClicked == false) {
      if (allVideos.length > 0) {
        return (
          <>
            <Toaster />
            {allVideos.map((video) => (
              <div
                key={video.src}
                id={video.id}
                className="w-full h-full snap-center scroll-smooth"
              >
                <VideoPlayer {...video} />
              </div>
            ))}
          </>
        );
      } else {
        return (
          <div className="pt-24 text-center">
            The providers do not have videos
          </div>
        );
      }
    } else {
      if (likedVideos.length > 0) {
        return (
          <>
            <Toaster />
            {allVideos.map(
              (video) =>
                likedVideos.includes(video.src) && (
                  <div
                    key={video.src}
                    id={video.id}
                    className="w-full h-full snap-center scroll-smooth"
                  >
                    <VideoPlayer {...video} />
                  </div>
                )
            )}
          </>
        );
      } else {
        return (
          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full p-10">
            Your Favorite is empty! Like your videos
          </div>
        );
      }
    }
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
