const Book=require("../models/Book")
const Category=require("../models/Category")

const getAllBooks=async()=>{
    return await Book.find().populate("category")
}
const createBook=async(b)=>{
    return await Book.create(b)
}
const getBookById=async(id)=>{
    return await Book.findById(id)
}
const updateBook=async(id, b)=>{
    return await Book.findByIdAndUpdate(id, b)
    
}
const deleteBookById=async(id)=>{
    return await Book.findByIdAndDelete(id)
}
const getAllCategories=async()=>{
    return await Category.find();
}
const createCategory=async(c)=>{
    return await Category.create(c)
}
const deleteCategoryById=async(id)=>{
    return await Category.findByIdAndDelete(id)
}
module.exports={
    getAllBooks, 
    createBook,
    getBookById,
    updateBook,
    deleteBookById,
    getAllCategories,
    createCategory,
    deleteCategoryById



}