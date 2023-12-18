import { useContext } from "react";
import Default from "../layouts/Default";
import { GlobalContext } from "../store/store";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const Search = () => {
  const { providers } = useContext(GlobalContext);

  return (
    <Default>
      <div className="px-4 my-4">
        <input
          type="text"
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
        <div className="flex flex-col gap-4 px-4 mt-10">
          {providers[0].videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      )}
    </Default>
  );
};

export default Search;
