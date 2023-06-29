const mongoose= require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    emailId:String,
    mobileNo:Number,
    addressOne:String,
    addressTwo:String,
    state:String,
    city:String,
    zipCode:Number

})
module.exports=mongoose.model('users',userSchema)