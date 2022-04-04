const express = require("express");
const app = express();
// const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoue = require("./routes/posts");
const categoriRoute = require("./routes/categories");

const multer = require("multer");
const path = require("path");

dotenv.config();
const URI = process.env.MONGO_URL;

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(URI)
  .then(console.log("Connect to MongoDB ..."))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Đã upload file");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoue);
app.use("/api/categories", categoriRoute);

app.use("/kapa", (req, res) => {
  console.log("chao cau nha");
});

app.listen(port, () => {
  console.log(`Đang nghe cổng ${port}`);
});
