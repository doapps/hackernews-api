const Comment = require('../models/comment.model');

exports.comment_create = async (req, res) => {
  const comment = new Comment({
    description: req.body.description,
    authorId: req.body.authorId,
    publicationId: req.body.publicationId,
  });

  try {
    const item = await comment.save();
    res.status(200).send({ message: 'success', data: item });
  } catch (err) {
    res.status(400).send({ message: 'error', data: err });
  }
};

exports.comment_publication = async (req, res) => {
  try {
    const commentRaw = await Comment.find().populate('authorId').populate('publicationId');
    const commentsPublication = commentRaw.map(comments => ({
      description: comments.description,
      link: comments.link,
      author: comments.authorId.username,
      created: comments.created,
    }));
    res.status(200).send({ message: 'success', data: commentsPublication });
  } catch (err) {
    res.status(400).send({ message: 'error', data: err });
  }
};

exports.book_detail = (req, res) => {
  res.status(200).send({ message: 'success' });
};

