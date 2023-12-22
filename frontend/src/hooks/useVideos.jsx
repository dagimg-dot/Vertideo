import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";
import randomizeVideos from "../utils/randomizeVideos";

const useVideos = () => {
  const { providers, SaveVideos } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fullUrlConstructor = (provider) => {
    // Test
    // return "http://192.168.1.4:5501/test/";
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

  const fetchVideos = async (idx) => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.1.4:3000/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: fullUrlConstructor(providers[idx]) }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const randomizedVideos = randomizeVideos(data.data);
      SaveVideos({ id: providers[idx].id, videos: randomizedVideos });
    } catch (error) {
      setError(error.message);
      SaveVideos({ id: providers[idx].id, videos: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (providers.length > 0) {
      providers.forEach((provider, idx) => {
        fetchVideos(idx);
      });
    }
  }, []);

  return [isLoading, error];
};

export default useVideos;
