const express=require('express');
const app=express();
const userRouter=require('./src/routes/userRoutes')

/// Routes
app.use('/user',userRouter)


app.listen(5000,(err)=>{
    console.log('Server is running on port 5000');
})