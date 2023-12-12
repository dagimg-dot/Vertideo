import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";

const useVideos = () => {
  const { providers } = useContext(GlobalContext);
  const [Videoss, setVideos] = useState([]);

  const fullUrlConstructor = (provider) => {
    return (
      "http://" +
      provider.hostname +
      ":" +
      provider.port +
      "/" +
      "share/" +
      provider.foldername
    );
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch("http://192.168.1.2:3000/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: fullUrlConstructor(providers[0]) }),
      });

      const data = await res.json();
      setVideos(data.data);
    };

    if (providers.length > 0) {
      fetchVideos();
    }
  }, []);

  const Videos = Videoss.map((vid, idx) => {
    return {
      id: idx,
      folder: vid.split("/")[4],
      src: vid,
    };
  });

  return Videos;
};

export default useVideos;
