const mongoose=require('mongoose')
require('dotenv').config();



const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=>{console.log('db connection successfull')})
    .catch((e)=>{console.log("Connection failed")
    console.log('error')
        process.exit(1);
})
}

module.exports=dbConnect;