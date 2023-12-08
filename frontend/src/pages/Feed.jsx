import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import VideoFeed from "../components/VideoFeed";
import Default from "../layouts/Default";

const Feed = () => {
  return (
    <Default>
      <div className="w-screen h-screen flex flex-col place-content-center overflow-hidden">
        <Header />
        <main className="h-full w-full aspect-[9/16] rounded-tr-md rounded-tl-md overflow-y-scroll snap-y snap-mandatory block relative">
          <VideoFeed />
        </main>
      </div>
    </Default>
  );
};

export default Feed;
