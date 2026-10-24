import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const publicDir = path.join(__dirname, "public");
app.disable("x-powered-by");
app.use(express.static(publicDir, { extensions: ["html"] }));
app.use((_req, res) => {
  res.status(404).sendFile(path.join(publicDir, "404.html"));
});
const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`LunarCloud Tech is running at http://localhost:${port}`);
});
