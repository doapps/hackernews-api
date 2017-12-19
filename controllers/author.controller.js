const Author = require('../models/author.model');

exports.author_create = (req, res) => {
    let author = new Author({
        username: req.body.username
    });

    author.save()
    .then(item => {
        res.status(200).send({message: 'success', data: item});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};

exports.author_list = (req, res) => {
    Author.find({})
    .then(authors => {
        res.status(200).send({message: 'success', data: authors});
    })
    .catch(err => {
        res.status(400).send({message: 'error', data: ''});
    });
};