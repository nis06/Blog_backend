//import model..
const Post=require('../models/postModel')
const Comment=require('../models/commentModel')

exports.createComment=async(req,res)=>{
    try{
        const {body,user,post}=req.body;
        const comment=new Comment({
            post,user,body
        });

        const savedComment=await comment.save();

        //find the post by ID , add the comment to its comment array

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
            .populate("comments")  //populatee the comments array with coment document
            .exec()

        res.json({
            post:updatedPost
            
        })
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            error:'Error while creating comments'
        })
    }
}

