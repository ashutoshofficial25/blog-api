const express = require("express");
const morgan = require("morgan");
const { connectDb } = require("./config/dbConfig");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
//base route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

app.use("/api/v1", router);

let PORT = 3005;

app.listen(PORT, async () => {
  console.log("server started");
  await connectDb();
  console.log("database connected");
});
