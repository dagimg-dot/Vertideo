import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";
import randomizeVideos from "../utils/randomizeVideos";
import toast from "react-hot-toast";
import mergeVideos from "../utils/mergeVideos";

const useVideos = () => {
  const { providers, SaveVideos } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fullUrlConstructor = (provider) => {
    // Test
    // return `http://${import.meta.env.VITE_IPADDRESS}:5501/test`;
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
    const BACKEND_URL = `http://${
      import.meta.env.VITE_IPADDRESS
    }:3000/api/videos`;
    try {
      const res = await fetch(BACKEND_URL, {
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
      const allVideos = mergeVideos(providers);
      if (allVideos.length === 0) {
        setError(error.message);
      } else {
        toast.error(
          `${providers[idx].foldername} failed to fetch. ${error.message}`,
          {
            position: "top-center",
            style: {
              backgroundColor: "#bcfb08",
              fontWeight: "bold",
            },
          }
        );
      }
      SaveVideos({ id: providers[idx].id, videos: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const allVideos = mergeVideos(providers);

    // if (allVideos.length === 0) { 
      if (providers.length > 0) {
        providers.forEach((provider, idx) => {
          fetchVideos(idx);
        });
      }
    // }
  }, []);

  return [isLoading, error];
};

export default useVideos;
