const express=require("express");
const categoryRoute = require("./Routing/categories");
const app=express()

// const bodyParser = require("body-parser");
// app.use(bodyParser());
app.use(express.json())
const cors=require("cors");
const blog = require("./Routing/blog");
app.use(cors({
        origin:"*"  
}))

app.use("/api",categoryRoute);
app.use("/",blog);
app.get('/',(req,res)=>{
        console.log('Homme page')
     res.send('API is running fine')   
})


app.listen(4001,()=>{
    
                console.log("Server is running fine")
     
        
})



