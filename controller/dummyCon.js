const express =require('express')

exports.dummyLink=(req,res)=>{
    try{
        res.send('<h1>This is dummy route</h1>')
    }
    catch(e){
        console.error('Error:', e);
        res.status(500).send('Internal Server Error');
    }
}