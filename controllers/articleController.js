const Article = require("../models/articleSchema");

const article_index_get = (req, res) => {
  // result = Array of opjets inside monogoDB database
  Article.find()
    .then((result) => {
      res.render("index", { title: "All Articles", arrArticles: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
const article_details_get = (req, res) => {
  const id = req.params.myID;
  // result = object inside database
  Article.findById(id)
    .then((result) => {
      res.render("details", { title: "details", OBJartile: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
const article_delete = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ index: "/all-articles" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const article_post = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((result) => {
      res.redirect("/all-articles");
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  article_index_get,
  article_details_get,
  article_delete,
  article_post,
};
