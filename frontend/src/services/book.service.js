import http from "./http.commn"

const getAllBooks=async()=>{
    return await http.get("/books")
}
const getBookById=async(id)=>{
    return await http.get(`/books/${id}`)
}
const deleteBook=async(id)=>{
    return await http.delete(`/books/${id}`)
}
const addBook=async(book)=>{
    return await http.post('/books',book,{headers:{ContentType: "multipart/form-data",}})
}
const updateBook=async(book)=>{
    return await http.put(`/books/${book._id}`,book)
}
const bookServices={
    getAllBooks,
    getBookById,
    deleteBook,
    addBook,
    updateBook
}
export default bookServices