import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("<h1>Hello Docker! HI</h1>"));

app.listen(port, () => console.log(`app is running on port: ${port}`));
