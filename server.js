import express from "express";
import getIpAddress from "./utils/IPHandler.js";
import router from "./router/router.js";
import cors from "cors";

const app = express();

const PORT = 3000;
const IP_ADDRESS = getIpAddress();

app.use(express.json());
app.use(cors());
app.use("/thumbnails", express.static("thumbnails"));

app.use("/api", router);

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server listening on ${IP_ADDRESS}:${PORT}`);
});
