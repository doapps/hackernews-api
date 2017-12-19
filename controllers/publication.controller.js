let Publication = require('../models/publication.model');
let Author = require('../models/author.model');

exports.publication_list = (req, res) => {
    Publication.find()
    .populate('authorId')
    .populate('categoryId')
    .then(publications => {
        res.status(200).send({message: 'success', data: publications});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};

exports.publication_create = (req, res) => {
    let publication = new Publication({
        title: req.body.title,
        link: req.body.link,
        authorId: '5a388a98b2d6a910159c2003',
        categoryId: '5a388c356056e3102be1fb94'
    });

    publication.save()
    .then(item => {
        res.status(200).send({message: 'success', data: item});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};
