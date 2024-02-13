import { useState, useContext } from "react";
import { Heart, Share } from "./Icons/PlayerIcons";
import { GlobalContext } from "../store/store";

const Actions = ({ colorFill, src }) => {
  const { likeVideo } = useContext(GlobalContext);

  const handleLike = () => {
    likeVideo(src);
  };

  const handleShare = () => {
    alert("shared");
  };

  return (
    <aside className="flex flex-col items-center absolute bottom-[150px] right-[13px]">
      <div className="mt-[20px]">
        <button
          onClick={handleLike}
          className="text-white flex flex-col justify-center items-center mb-[8px] bg-transparent border-none stroke-gray-300"
        >
          <Heart width={45} fill={colorFill} />
          {/* <span title="like">{likes}</span> */}
        </button>
        <button
          onClick={handleShare}
          className="text-white flex flex-col justify-center items-center mb-[8px] bg-transparent border-none stroke-gray-300"
        >
          <Share width={45} />
          {/* <span title="share">{shares}</span> */}
        </button>
      </div>
    </aside>
  );
};

export default Actions;
