import pool from "./pool.js";
import { format } from "date-fns";

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  const rowsModified = rows.map((row) => ({
    username: row.username,
    message: row.message,
    date: format(row.date, "hh:mm a, dd MMM yyyy"),
  }));
  console.log(rowsModified);
  return rowsModified;
}

async function addMessage(username, message, date) {
  const res = await pool.query(
    "INSERT INTO messages(username,message,date) VALUES ($1,$2,$3);",
    [username, message, date]
  );
  console.log(res.rows[0]);
}

export { getMessages, addMessage };
