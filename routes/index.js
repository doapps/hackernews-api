let express = require('express');
let router = express.Router();

let author_controller = require('../controllers/author.controller');
let category_controller = require('../controllers/category.controller');
let publication_controller = require('../controllers/publication.controller');

/* GET request */
router.get('/', (req, res, next) => {
    res.render('index', {});
  });

/* API request */
router.post('/api/author/create', author_controller.author_create);

router.get('/api/author', author_controller.author_list);

router.post('/api/category/create', category_controller.category_create);

router.get('/api/category', category_controller.category_list);

router.post('/api/publication/create', publication_controller.publication_create);

router.get('/api/publications', publication_controller.publication_list);

module.exports = router;
