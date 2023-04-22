const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    lname:{type:String,required:true},
    fname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String}
})
const User=mongoose.model("User",userSchema)
module.exports=User