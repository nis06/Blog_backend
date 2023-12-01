const Post=require('../models/postModel')
const Like=require('../models/likeModel')

exports.likePost=async(req,res)=>{
    try{
        const {user,post}=req.body;
        const like=new Like({
            post,user,
        });
        const savedLikes=await like.save();

        const updatedLikesOnPosts=await Post.findByIdAndUpdate(post,{$push:{likes:savedLikes._id}},{new:true})
        .populate("likes")  //populatee the comments array with coment document
        .exec()

        res.json({
            post:updatedLikesOnPosts
        })
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            error:'Error while creating comments'
        })
    }
}

exports.unlikePost=async(req,res)=>{
    try{
         const {post, like}=req.body;
         const deletedLike=await Like.findByIdAndDelete({post:post,_id:like})

         //update post collerction
         const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

         res.json({
            post:updatedPost
         })
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            error:'Error while unliking comments'
        }) 
    }
}