const { Post } = require('../models/post.model');

const findAllPosts = async (req, res) => {
  try {
    const { user } = req;

    console.log(user)

    const posts = await Post.findAll();

    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
}

const createPost = async (req, res) => {
  try {
    const { title, content, user_id, category_id } = req.body;
    const post = await Post.create({ title, content, user_id, category_id });
    res.status(200).send(post);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};



module.exports = {
  createPost,
  findAllPosts
};
