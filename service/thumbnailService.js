import ffmpeg from "fluent-ffmpeg";

const generateThumbnail = (videoPath, thumbnailPath, time = "00:00:01") => {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .setStartTime(time)
      .screenshots({
        count: 1,
        folder: thumbnailPath,
        filename: "thumbnail-%b.png",
      })
      .on("end", () => resolve())
      .on("error", (err) => reject(err));
  });
};

export default generateThumbnail;
