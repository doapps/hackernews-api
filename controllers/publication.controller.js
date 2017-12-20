const Publication = require('../models/publication.model');

exports.publication_list = async (req, res) => {
  try {
    const publicationRaw = await Publication.find().populate('authorId').populate('categoryId');
    const publications = publicationRaw.map(publication => ({
      title: publication.title,
      link: publication.link,
      created: publication.created,
      points: publication.points,
      comments: publication.comments,
      author: publication.authorId.username,
      category: publication.categoryId.name,
    }));
    res.status(200).send({ message: 'success', data: publications });
  } catch (err) {
    res.status(400).send({ message: 'error', data: err });
  }
};

exports.publication_create = async (req, res) => {
  const publication = new Publication({
    title: req.body.title,
    link: req.body.link,
    authorId: '5a388a98b2d6a910159c2003',
    categoryId: '5a388c356056e3102be1fb94',
  });

  try {
    const item = await publication.save();
    res.status(200).send({ message: 'success', data: item });
  } catch (err) {
    res.status(400).send({ message: 'error', data: err });
  }
};
