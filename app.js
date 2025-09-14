import express, { urlencoded } from "express";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(urlencoded({ extended: true }));

//set assets path
const assetsPath = join(__dirname, "public");
app.use(express.static(assetsPath));

//set template engine - ejs
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//add routes
app.use("/new", newMessageRouter);
app.use("/", indexRouter);

//handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err);
});

//start the server
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`App running successfully at - http://localhost:${PORT}`);
});
