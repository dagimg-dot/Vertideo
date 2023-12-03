import { getAllVideos } from "../service/VideoService.js";

class Video {
  #videoList = [];

  constructor(url) {
    this.url = url;
  }

  async find() {
    this.#videoList = await getAllVideos(this.url);
    return this.#videoList;
  }
}

export default Video;
