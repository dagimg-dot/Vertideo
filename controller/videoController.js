import Video from "../model/Video.js";

const getVideos = async (req, res) => {
  const { url } = req.body;
  const video = new Video(url);
  try {
    const videos = await video.find();
    res.status(200).json({ data: videos });
  } catch (error) {
    res.status(500).json({ error: { message: error.message } });
  }
};

export default getVideos;
