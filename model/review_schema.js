var mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    sub : {
        type : String,
        require : true 
    },
    review :{
        type : String ,
        require : true,

    },
    rating : {
        type : Number,
        default: 0
    },

    isActive : {
        type:Boolean,
        default:true
    },
   

    

})
companySchema.set('timestamps',true)

module.exports = mongoose.model('review',reviewSchema)