
const express= require("express");
require("./data/db");
const bkrank=require("./data/bk");

const app= express();
const port = process.env.port ||3000;

app.use(express.json());

// update all api data using post man manualy
app.post("/data",async(req,res )=>{
    try{
        const newver=new bkrank(req.body)
        console.log(req.body)
        const var1=await newver.save();
       

        
    }catch(e){
        
    }
})

app.get("/data",async(req,res )=>{
    try{
        const getbook=await bkrank.find({});
        
        res.send(getbook);
        
    }catch(e){
        
    }
})




app.listen(port,()=>{
    console.log(`connection is live at port no${port}`)
})