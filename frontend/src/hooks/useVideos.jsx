import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";

const randomizeVideos = (Videos) => {
  const randomizedVideos = [...Videos];
  const getRand = () => Math.floor(Math.random() * randomizedVideos.length);

  for (let i = 0; i < randomizedVideos.length; i++) {
    let rand = getRand();
    let rand2 = getRand();
    let temp = randomizedVideos[rand];
    randomizedVideos[rand] = randomizedVideos[rand2];
    randomizedVideos[rand2] = temp;
  }

  return randomizedVideos;
};

const useVideos = () => {
  const { providers, SaveVideos } = useContext(GlobalContext);
  const [Videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fullUrlConstructor = (provider) => {
    // return "http://192.168.1.3:5501/test/";
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
    const fetchVideos = async (idx) => {
      setLoading(true);
      try {
        const res = await fetch("http://192.168.1.3:3000/api/videos", {
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
        // const randomizedVideos = data.data;

        setVideos(randomizedVideos);
        SaveVideos({ id: providers[idx].id, videos: randomizedVideos });
        console.log(providers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (providers.length > 0) {
      providers.forEach((provider, idx) => {
        fetchVideos(idx);
      });
    }
  }, []);

  return [isLoading, error, Videos];
};

export default useVideos;
