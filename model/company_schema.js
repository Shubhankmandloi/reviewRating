var mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    name : {
        type : String,
        require : true 
    },
    address :{
        type : String ,
        require : true,

    },
    date : {
        type : String,
        require : true 
    },
    city : {
        type : String ,
        require:true


    },
    logo :{
        type:String,
        require:true
    },
    isActive : {
        type:Boolean,
        default:true
    },

    userId: {
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'user'
    },

})
companySchema.set('timestamps',true)

module.exports = mongoose.model('company',companySchema)
