var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    Post.find().sort({createdAt: -1 }).exec(function(err, posts) {
      if (err) { throw err; }

      res.render('posts/index', { posts: posts });
    });
  },
  New: function(req, res) {
    res.render('posts/new', {});
  },
  Create: function(req, res) {
    var post = new Post(req.body);
    post.createdAt = new Date();
    console.log(post)
    post.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    });
  }
};

module.exports = PostsController;
