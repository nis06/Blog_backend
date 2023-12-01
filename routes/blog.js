const express=require('express')
const router=express.Router();

const {dummyLink}=require('../controller/dummyCon')
const {createComment}=require('../controller/commentController')
const {createPost,getAllPosts}=require('../controller/postController')
const {likePost} = require('../controller/likeController')
const {unlikePost}=require('../controller/likeController')

router.get('/dummyRoutes',dummyLink)
router.post('/comments/create',createComment)
router.post('/posts/create',createPost)
router.get('/posts',getAllPosts)
router.post('/likes/like',likePost)
router.post('/likes/unlike',unlikePost)

module.exports=router;