const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


// /*---------- Public Routes ----------*/
// /api/posts 

router.post('/', postsCtrl.create);

// /api/posts the index functions job is to return all of the posts
router.get('/', postsCtrl.index)



/*---------- Protected Routes ----------*/




module.exports = router;