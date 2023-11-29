import WScraper from "./WScraper/index.js";
import bodyTest from "./test/testBody.js";

const scraper = new WScraper();
scraper.fromStr(bodyTest);

const result1 = scraper.getElementsByTagName("li");
const result2 = scraper.getElementsByClassName("filename");
console.log(result1);
console.log(result2);

console.log(scraper.innerText(result1))
