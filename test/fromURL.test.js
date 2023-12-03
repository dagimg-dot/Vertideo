import WScraper from "../WScraper/index.js";

const scraper = new WScraper();

try {
  await scraper.fromURL("http://192.168.1.2:8082/share/assets");
} catch (e) {
  console.log(e);
}

try {
  const result = scraper.getElementsByTagName("div");
  console.log(result);
} catch (error) {
  console.log(error);
}
