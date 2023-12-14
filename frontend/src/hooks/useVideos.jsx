import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";

const useVideos = () => {
  const { providers } = useContext(GlobalContext);
  const [Videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setLoading(true);
      try {
        const res = await fetch("http://192.168.1.2:3000/api/videos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: fullUrlConstructor(providers[0]) }),
        });
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error.message);
        }

        setVideos(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (providers.length > 0) {
      fetchVideos();
    }
  }, []);

  return [isLoading, error, Videos];
};

export default useVideos;
