import express from "express";
import { addMessage } from "../db/queries.js";
import { format } from "date-fns";

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessagePage");
});

newMessageRouter.post("/", async (req, res) => {
  const { username, message } = req.body;
  const now = new Date();
  // const formattedDate = format(now, "hh:mm a, dd MMM yyyy");
  await addMessage(username, message, now);
  res.redirect("/");
});

export default newMessageRouter;
