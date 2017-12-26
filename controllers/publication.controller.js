const Publication = require('../models/publication.model');

exports.publication_list = async (req, res) => {
  try {
    const publicationRaw = await Publication
      .find()
      .populate('authorId')
      .populate('categoryId')
      .exec();

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

exports.publication_filter = async (req, res) => {
  try {
    const publicationRaw = await Publication.find().populate('authorId').populate('categoryId');
    const publicationsFilter = publicationRaw.filter(publication => publication.categoryId.name === req.params.categoryName);
    const publications = publicationsFilter.map(publication => ({
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
  const publication = {
    title: req.body.title,
    link: req.body.link,
    authorId: '5a388a98b2d6a910159c2003',
    categoryId: '5a388c356056e3102be1fb94',
  };

  try {
    const item = await Publication.create(publication);
    res.status(200).send({ message: 'success', data: item });
  } catch (err) {
    res.status(400).send({message: 'error', data: err });
  }
};
