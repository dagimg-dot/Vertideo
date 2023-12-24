import { useContext, useEffect, useState } from "react";
import Default from "../layouts/Default";
import { GlobalContext } from "../store/store";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import useSearch from "../hooks/useSearch";
import mergeVideos from "../utils/mergeVideos";

const Search = () => {
  const { providers } = useContext(GlobalContext);
  const [videoList, setVideoList] = useState([]);
  const [results, searchToken, setSearchToken] = useSearch(videoList);

  useEffect(() => {
    const newVideoList = mergeVideos(providers);
    setVideoList(newVideoList);
  }, []);

  return (
    <Default>
      <div className=" w-full fixed top-0 bg-[#101115] px-4 py-4">
        <input
          type="text"
          value={searchToken}
          onChange={(event) => setSearchToken(event.target.value)}
          className="w-full placeholder:opacity-40"
          placeholder="Search your videos . . ."
        />
      </div>
      {providers.length === 0 ? (
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full p-10">
          You don't have any providers. Go to the{" "}
          <Link to="/provider" className="text-blue-400">
            provider
          </Link>{" "}
          page and add at least one provider.
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-4 mt-24 mb-4">
          {results.length === 0 ? (
            searchToken !== "" ? (
              <div className="text-center">
                No videos found that match{" "}
                <span className="text-[#bcfb08] underline">{searchToken}</span>
              </div>
            ) : videoList.length !== 0 ? (
              videoList.map((video) => (
                <VideoCard key={video.src} video={video} token={searchToken} />
              ))
            ) : (
              <div className="text-center">No videos to search</div>
            )
          ) : (
            results.map((video) => (
              <VideoCard key={video.src} video={video} token={searchToken} />
            ))
          )}
        </div>
      )}
    </Default>
  );
};

export default Search;
