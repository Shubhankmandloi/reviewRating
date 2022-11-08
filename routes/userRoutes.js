const express = require('express');
const router = express.Router()
const user = require('../controller/usercontroller')
const validation = require('../validation/user/user_validation')


//router.post("/register",validation.registeruservalidation,user.userSignup)
router.post('/registerUser',validation.registeruservalidation,user.userSignup)
module.exports=router;