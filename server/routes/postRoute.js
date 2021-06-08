const router = require('express').Router();
const {getPost, addPost, getPostId, updatePost, deletePost} = require('../controllers/postController');

//get post

router.get('/post', getPost)

//add post
router.post('/post', addPost)


//get post by id

router.get('/post/:id', getPostId)

//update a specific post

router.put('/post/update/:id', updatePost)


//delete a specific post

router.delete('/post/:id', deletePost)


//intial test for router without controller
// router.get('/post', (req, res)=>{
//     res.send('Hello from post router')
// })

// with controller
// router.get('/post', )



module.exports = router;