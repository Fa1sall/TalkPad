import express from "express";
import messages from "../models/messages.js";

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessagePage");
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date().toDateString() });
  res.redirect("/");
});

export default newMessageRouter;
