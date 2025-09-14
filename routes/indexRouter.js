import express from "express";
import messages from "../models/messages.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "TalkPad - Message Board", messages });
});

export default indexRouter;
