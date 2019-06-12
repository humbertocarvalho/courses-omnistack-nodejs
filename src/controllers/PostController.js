const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    return await Post.find();
  },

  async store(req, res) {}
};
