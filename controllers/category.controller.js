const Category = require('../models/category.model');

exports.category_create = (req, res) => {
  const category = new Category({
    name: req.body.name,
  });

  category.save()
    .then((item) => {
      res.status(200).send({ message: 'success', data: item });
    })
    .catch((err) => {
      res.status(400).send({ message: 'error', data: err });
    });
};

exports.category_list = (req, res) => {
  Category.find({})
    .then((categories) => {
      res.status(200).send({ message: 'success', data: categories });
    })
    .catch((err) => {
      res.status(400).send({ message: 'error', data: err });
    });
};
