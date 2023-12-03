import WScraper from "../WScraper/index.js";

const scraper = new WScraper();

const generateURL = (url, videoNameList) => {
  const result = videoNameList.map((videoName) => {
    return url + "/" + videoName;
  });

  return result;
};

const getAllVideos = async (url) => {
  try {
    await scraper.fromURL(url);
    const result = scraper.getElementsByClassName("filename");
    const extractedVideoNames = scraper.innerText(result);
    const videoLinks = generateURL(url, extractedVideoNames);
    return videoLinks;
  } catch (error) {
    console.log(error);
  }
};

export { getAllVideos };
