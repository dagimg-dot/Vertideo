import { useEffect, useState } from "react";

const useSearch = (videoList) => {
  const [searchToken, setSearchToken] = useState("");
  const [results, setResults] = useState(videoList);

  const lowerCase = (str) => {
    return str.toLowerCase();
  };

  useEffect(() => {
    const searchDoc = () => {
      let newResult = [];
      console.log(videoList);
      if (searchToken !== "") {
        videoList.forEach((video) => {
          if (
            lowerCase(video.src.split("/").pop()).includes(
              lowerCase(searchToken)
            )
          ) {
            newResult.push(video);
          }
        });
      } else {
        newResult = [...videoList];
      }

      setResults(newResult);
    };

    searchDoc();
  }, [searchToken]);

  return [results, searchToken, setSearchToken];
};

export default useSearch;
