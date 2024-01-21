import WScraper from "../WScraper/index.js";
import getIpAddress from "../utils/IPHandler.js";
import randomIdGenerator from "../utils/randomIdGenerator.js";
import generateThumbnail from "./thumbnailService.js";

const scraper = new WScraper();

const generateURL = (url, videoNameList) => {
  const result = videoNameList.map((videoName) => {
    return url + "/" + videoName;
  });

  return result;
};

const generateThumbnailLink = (videoSrc) => {
  const IPADDRESS = getIpAddress();
  const videoName = videoSrc.split("/").pop().split(".")[0];
  const thumbnailLink = `http://${IPADDRESS}:3000/thumbnails/thumbnail-${videoName}.png`;
  return thumbnailLink;
};

const getAllVideos = async (url) => {
  await scraper.fromURL(url);
  const result = scraper.getElementsByClassName("filename");
  const extractedVideoNames = scraper.innerText(result);
  const videoLinks = generateURL(url, extractedVideoNames);

  for (let i = 0; i < videoLinks.length; i++) {
    await generateThumbnail(videoLinks[i], "thumbnails");
  }

  const videos = videoLinks.map((vid) => {
    const video = {
      id: randomIdGenerator(),
      folder: vid.split("/")[4],
      // folder: vid.split("/")[3], // For testing
      thumbnail: generateThumbnailLink(vid),
      src: vid,
    };

    return video;
  });
  return videos;
};

export { getAllVideos };
