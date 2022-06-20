// install and import express

const express = require("express");
let app = express();

// Code here
let data = require("./assets/user.json")


app.listen(()=>{
    console.log("listing on port")
})

app.use(express.json())


app.get("/",async(req,res)=>{
   await res.sendFile("assets/users.html",{root:__dirname})
})

app.get("/users",async(req,res)=>{
    await res.sendFile("assets/user.json",{root:__dirname})
 })


 app.post("/users",async(req,res)=>{
     
   
      let user  = req.body;
      res.json({
        user
      })
    
 })

 app.get("/users/:id",async(req,res)=>{

    let ide=req.params.id
    
    let user
    for(let i=0; i<data.length; i++){
        if(data[i].id==ide){
          user=data[i]
        }
    }
   
    res.json({
      user
    })
  
})


// Note: Do not remove this export statement
module.exports = app;
