import { useContext, useEffect, useState } from "react";
import Default from "../layouts/Default";
import { GlobalContext } from "../store/store";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { providers } = useContext(GlobalContext);
  const [videoList, setVideoList] = useState([]);
  const [results, searchToken, setSearchToken] = useSearch(videoList);

  useEffect(() => {
    let newVideoList = [];
    providers.forEach((provider) => {
      if (provider.videos.length > 0) {
        newVideoList = [...newVideoList, ...provider.videos];
      }
    });
    setVideoList(newVideoList);
  }, []);

  return (
    <Default>
      <div className="px-4 my-4">
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
        <div className="flex flex-col gap-4 px-4 my-10">
          {results.length === 0
            ? videoList.map((video) => <VideoCard key={video.src} {...video} />)
            : results.map((video) => <VideoCard key={video.src} {...video} />)}
        </div>
      )}
    </Default>
  );
};

export default Search;
