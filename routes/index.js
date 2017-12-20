const express = require('express');
const router = express.Router();

const authorController = require('../controllers/author.controller');
const categoryController = require('../controllers/category.controller');
const publicationController = require('../controllers/publication.controller');
const commentController = require('../controllers/comment.controller');

/* GET request */
router.get('/', (req, res) => {
  res.render('index', {});
});

/* API request */
router.post('/api/author/create', authorController.author_create);

router.get('/api/author', authorController.author_list);

router.post('/api/category/create', categoryController.category_create);

router.get('/api/category', categoryController.category_list);

router.post('/api/publication/create', publicationController.publication_create);

router.get('/api/publications', publicationController.publication_list);

router.get('/api/publications/:categoryName', publicationController.publication_filter);

router.post('/api/comment/create', commentController.comment_create);

router.get('/api/publication/:id', commentController.comment_publication);

module.exports = router;
