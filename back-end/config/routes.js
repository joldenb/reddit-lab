var express = require('express');
var router = express.Router();
var textPostsController = require('../controllers/textPosts');
var commentsController = require('../controllers/comments');

router.get('/api/posts', textPostsController.index)

router.post('/api/posts', textPostsController.create)

router.put('/api/posts/:post_id', textPostsController.update)

router.get('/api/posts/:post_id', textPostsController.show)

router.delete('/api/posts/:post_id', textPostsController.destroy)

//Comment Routes

module.exports = router;