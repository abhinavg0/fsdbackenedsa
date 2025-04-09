const express=require('express')
const fs=require('fs')
const app=express();

app.get('/users',(req,res)=>{
    res.send('welcome to backened server using express');
})

app.post('/users',(req,res)=>{
    const data=req.body;
    res.status(200).json({message: 'data received', data:data})
})

app.listen(9000,()=>{
    console.log("server is running on port 9000")
})

 