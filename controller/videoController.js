import Video from "../model/Video.js";

const getVideos = async (req, res) => {
  console.info("/videos accessed");
  const { url } = req.body;
  const video = new Video(url);
  try {
    const videos = await video.find();

    if (videos.length === 0) {
      throw new Error("the host you provided does not have videos");
    }

    res.status(200).json({ data: videos });
  } catch (error) {
    if (error.message.includes("ECONNREFUSED")) {
      return res
        .status(400)
        .json({ error: { message: "request to host failed" } });
    }
    res.status(500).json({ error: { message: error.message } });
    console.error("Error:", error.message);
  }
};

export default getVideos;
