let Category = require('../models/category.model');

exports.category_create = (req, res) => {
    let category = new Category({
        name: req.body.name
    });

    category.save()
    .then(item => {
        res.status(200).send({message: 'success', data: item});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};

exports.category_list = (req, res) => {
    Category.find({})
    .then(categories => {
        res.status(200).send({message: 'success', data: categories});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};