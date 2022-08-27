import express from 'express'
import os from 'os'
const app=express()
const port=3000

app.get("/",(req,res) =>{
const msg= 'hi there,my name is hanan,and this is simple DevOps project using docker and k8s'
res.send(msg)
})

app.listen(port,()=>{

 console.log("its working")   
})
