const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String}
    
    
})
const category=mongoose.model("category",categorySchema)
module.exports=category