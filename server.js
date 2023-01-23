const express = require("express");
const morgan = require("morgan");
const { connectDb } = require("./config/dbConfig");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//base route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

app.use("/api/v1", router);
app.use(express.static("./uploads/blogImages"));

app.get("/uploads/blogImages/:image", (req, res) => {
  const imagePath = path.join(
    __dirname,
    `/uploads/blogImages/${req.params.image}`
  );
  res.sendFile(imagePath);
});

let PORT = 3008;

app.listen(PORT, async () => {
  console.log("server started");
  await connectDb();
  console.log("database connected");
});
