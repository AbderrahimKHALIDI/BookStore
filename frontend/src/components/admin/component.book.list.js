import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

import bookServices from "../../services/book.service"


function BookList(){
 const [books,setBooks]=useState([])
useEffect(()=>{
    getBook()

},[])
 async function getBook(){
    try{
    const result= await bookServices.getAllBooks()
    console.log(result)
    setBooks(result.data)}catch(error){
       
    }
    
}
async function deleBooks(id){
   await bookServices.deleteBook(id)
   getBook()
}


return(
    
   <div>
    <Link className={"mt-4 mb-2  btn btn-primary"} to={"/admin/books/new"}>Ajouter</Link>
    <table className={"table table-hover table-striped"}>
<thead>
<tr>
    <th scope="col">No</th>
    <th scope="col">Nom</th>
    <th scope="col">Description</th>
    <th scope="col">Isbn</th>
    <th scope="col">Auteur</th>
    <th scope="col">Editeur</th>
    <th scope="col">Categories</th>
    <th scope="col">Date Publication</th>
    <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
    books.map((elem,index)=>{
        return (
            <tr>
        
                <td > {index+1}</td>
                <td> {elem.name}</td>
                <td> {elem.description}</td>
                <td> {elem.isbn}</td>
                <td> {elem.auteur}</td>
                <td> {elem.editeur}</td>
                <td>{elem.category.name}</td>
                <td> {elem.date_publication}</td>
                <td>
                    <div className={"d-flex justify-content-center"}>
                    <button onClick={e=>deleBooks(elem._id)} className={"btn btn-danger"}>Supp</button>
                    <Link class="btn btn-primary btn-sm" to={`/admin/books/edit/${elem._id}`} >Modifier</Link>
                    </div>
                </td>
                
            </tr>
        )
    })
}

</tbody>
    </table>
    </div>
)
}
export default BookList