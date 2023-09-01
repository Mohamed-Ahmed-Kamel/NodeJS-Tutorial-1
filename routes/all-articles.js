const express = require("express");
const Router = express.Router();

const articleControllerd = require('../controllers/articleController')

// PATH started with "/all-articles"

Router.get("/", articleControllerd.article_index_get);

Router.get("/:myID", articleControllerd.article_details_get);

Router.delete('/:id', articleControllerd.article_delete);

Router.post("/", articleControllerd.article_post);

module.exports = Router;