const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // to post

// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongogDB connect");
  })
  .catch((err) => {
    console.log(`Errorrrrrrrrrrrrrrr: ${err}`);
  });

app.get("/", (req, res) => {
  res.redirect("/all-articles");
});

// page {add-new-article}
app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { title: "add-new-article" });
});

// "/all-articles" PATH
app.use("/all-articles", require("./routes/all-articles"));

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});

// for wrong 404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});