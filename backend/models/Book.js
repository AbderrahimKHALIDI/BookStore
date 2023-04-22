const mongoose= require("mongoose")
const bookSchema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    isbn:{type:String},
    auteur:{type:String},
    editeur:{type:String},
    date_publication:{type:String,default:Date.now()},
    image:{type:String},
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
        // required:true
    }
})
const Book=mongoose.model("Book",bookSchema)
module.exports=Book