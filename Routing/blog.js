const auth = require("../middleware/auth");
const blog=require("express").Router();
 
blog.post("/",auth,(req,res)=>{
    res.send("Hollywood Page")
})

module.exports=blog