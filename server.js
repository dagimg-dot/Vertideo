import express from "express";
import getIpAddress from "./utils/IPHandler.js";

const app = express();

const PORT = 3000;
const IP_ADDRESS = getIpAddress();

app.use(express.static("frontend"));

app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server listening on ${IP_ADDRESS} : ${PORT}`);
});
