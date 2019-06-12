const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    return await Post.find();
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });

    console.log(post);
    return res.json(post);
  }
};
