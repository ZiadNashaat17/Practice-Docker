import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 8000;

const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log("DB connected successfully!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("<h1>Hello Docker! HI</h1>"));

app.listen(port, () => console.log(`app is running on port: ${port}`));
