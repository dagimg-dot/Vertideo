import { Heart, Share } from "./Icons/PlayerIcons";

const Actions = ({
  likes = 123,
  shares = 123,
  hearted = false,
}) => {
  const handleLike = () => {
    alert("liked");
  };

  const handleShare = () => {
    alert("shared");
  };

  return (
    <aside className="flex flex-col items-center absolute bottom-[180px] right-[13px]">
      <div className="mt-[20px]">
        <button
          onClick={handleLike}
          className="text-white flex flex-col justify-center items-center mb-[8px] bg-transparent border-none"
        >
          <Heart width={45} fill="white" />
          <span title="like">{likes}</span>
        </button>
        <button
          onClick={handleShare}
          className="text-white flex flex-col justify-center items-center mb-[8px] bg-transparent border-none"
        >
          <Share width={45} />
          <span title="share">{shares}</span>
        </button>
      </div>
    </aside>
  );
};

export default Actions;
