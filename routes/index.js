const express = require('express');
const router = express.Router();

const authorController = require('../controllers/author.controller');
const categoryController = require('../controllers/category.controller');
const publicationController = require('../controllers/publication.controller');

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

module.exports = router;
