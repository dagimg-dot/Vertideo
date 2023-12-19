import { useEffect, useState } from "react";

const useSearch = (videoList) => {
  const [searchToken, setSearchToken] = useState("");
  const [results, setResults] = useState(videoList);

  const lowerCase = (str) => {
    return str.toLowerCase();
  };

  const getName = (video) => {
    return video.src.split("/").pop();
  };

  useEffect(() => {
    const searchDoc = () => {
      let newResult = [];
      if (searchToken !== "") {
        videoList.forEach((video) => {
          if (lowerCase(getName(video)).includes(lowerCase(searchToken))) {
            newResult.push(video);
          }
        });
      }

      setResults(newResult);
    };

    searchDoc();
  }, [searchToken]);

  return [results, searchToken, setSearchToken];
};

export default useSearch;
