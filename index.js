const express=require('express')
const app=express();

require('dotenv').config();
const PORT=process.env.PORT || 4000;

//middleware
app.use(express.json())


const blogRoutes=require('./routes/blog')
app.use('/api/v1',blogRoutes);

const connectWithDb=require('./config/database');
connectWithDb();

app.listen(PORT,()=>{
    console.log(`Task Successfull at port no ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('hiee ')
})