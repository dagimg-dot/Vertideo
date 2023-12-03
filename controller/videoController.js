import Video from "../model/Video.js";

const getVideos = async (req, res) => {
  const { url } = req.body;
  const video = new Video(url);
  const videos = await video.find();
  res.status(200).json({ data: videos });
};

export default getVideos;
