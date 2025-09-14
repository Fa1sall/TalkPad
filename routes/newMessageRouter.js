import express from "express";
import messages from "../models/messages.js";
import { format } from "date-fns";

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessagePage");
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  const now = new Date();
  const formattedDate = format(now, "hh:mm a, dd MMM yyyy");
  messages.push({ user, text, added: formattedDate });
  res.redirect("/");
});

export default newMessageRouter;
