import WScraper from '../WScraper/index.js';

const scraper = new WScraper();
await scraper.fromURL("http://192.168.1.5:8081/share/.cjx");

const result = scraper.getElementsByTagName("div");
console.log(result);

