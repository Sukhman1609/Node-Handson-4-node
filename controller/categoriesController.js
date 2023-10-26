const bcrypt = require('bcrypt');
const array=[];
const jwt=require('jsonwebtoken');
const secret_key ='hello16';

const register=(req,res)=>{
    const data=req.body;
    console.log(data)
    const details=array.find((item)=>item.email===data.email)
    if(details){
        return res.send({msg:'User already has an account!!'})
    }
    const hashpassword=bcrypt.hashSync(data.password,10)
    console.log(hashpassword)
    const tempobject={
        email:data.email,
        password:hashpassword,
    }
    array.push(tempobject)
    const token=jwt.sign({useremail: data.email},secret_key,{expiresIn:'7d'})
    console.log(token)
    res.send({msg:'user Registered Successfully!!!',token:token})
}

const login=(req,res)=>{
    const logindata=req.body;
    console.log(logindata)
    const details=array.find((item)=>(item.email===logindata.email));
   console.log(details)
   if(details){
    const validate=bcrypt.compareSync(logindata.password,details.password);
    if(validate){
        const token=jwt.sign({useremail:logindata.email},secret_key,{expiresIn:'7d'});
        console.log(token)
        return res.send({msg:'User logged in!!!',token:token})
    }
    else{
        return res.send({msg:'User password is wrong...Please Check again'})
    }
   }
   else{
    return res.send({ msg: 'User email is wrong...Please Check again' });
   }
}
module.exports={register,login}



// const register=(req,res)=>{
//     const data=req.body;
//     console.log(data)
    
// }

// const login=(req,res)=>{
  
// }
// module.exports={register,login}

