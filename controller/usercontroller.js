const bcrypt = require("bcrypt");
const User = require('../model/user_schema');
const userSchema=require('../model/user_schema')

const userSignup = async (req , resp)=>{

    console.log(req.body);
    const  password  = req.body.password
    const  email  = req.body.email
    const user = new userSchema({
        name : req.body.name,
        password : req.body.password,
        phone : req.body.phone,
        email : req.body.email,
        city : req.body.city,
        state : req.body.state,
    })
    
    console.log(req.body.name, password);
    try{

        //resp.json(addRes)
        const userExists = await User.findOne({email : email})
        if (userExists) {
            console.log('222222');
            return resp.status(400).json({ status : 400,error:"Email already exit"});
        }  
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password , salt);
        console.log('3333');
         await user.save();
        
        return resp.status(200).json({ status : 200,error:" Registration Succesfull.."});
    }
     catch(err){
        resp.send('Error')
     }
}


module.exports ={
    userSignup
};