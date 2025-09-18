import express from "express";
import { getMessages } from "../db/queries.js";

const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  res.render("index", {
    title: "TalkPad - Message Board",
    messages: await getMessages(),
  });
});

export default indexRouter;
