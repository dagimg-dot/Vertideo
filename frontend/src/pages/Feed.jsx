import { useContext } from "react";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import VideoFeed from "../components/VideoFeed";
import { GlobalContext } from "../store/store";
import FavouriteFeed from "../components/FavouriteFeed";

const Feed = () => {
  return (
    <div className="w-screen h-[100dvh] flex flex-col place-content-center overflow-hidden">
      <Header />
      <main className="h-full w-full aspect-[9/16] rounded-tr-md rounded-tl-md overflow-y-scroll snap-y snap-mandatory block relative">
        <VideoFeed />
      </main>
      <FooterMenu />
    </div>
  );
};

export default Feed;
