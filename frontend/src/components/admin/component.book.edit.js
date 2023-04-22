import { useState,useEffect } from "react"
import bookServices from "../../services/book.service"
import { useNavigate,useParams } from "react-router-dom"
import catServices from "../../services/categories.service"
function BookEdit(){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [isbn,setIsbn]=useState("")
    const [auteur,setAuteur]=useState("")
    const [editeur,setEditeur]=useState("")
    const [selectCat,setselectCat]=useState(0)
    const [categories,setCategories]=useState([])
    const [date_publication,setDatePub]=useState(new Date())
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect (()=>{
        getBookID()
        getcategorie()
    },[])
   async function getcategorie(){
const res= await catServices.getcategories()
setCategories(res.data)
    }
    useEffect(()=>{
        getBookID()
    },[])
    async function getBookID(){
        const b= await bookServices.getBookById(id)
        
       
        setName(b.data.name)
        setDescription(b.data.description)
        setIsbn(b.data.isbn)
        setAuteur(b.data.auteur)
        setEditeur(b.data.editeur)
        setselectCat(b.data.category)
        setDatePub(b.data.date_publication)
    }

  
    async function handelForm(e){
        e.preventDefault()
        const book={"_id":id,'name':name,'description':description,'isbn':isbn,'auteur':auteur,'editeur':editeur,"category":categories[selectCat],'date_publication':date_publication}
        bookServices.updateBook(book)
navigate("/admin/books")
    }
    return(
        <form className={"mt-5"} onSubmit={e=> handelForm(e)}>
            <h3>Modifier Votre Livre{name}:</h3>
<div className={"mb-3"}>
    <label htmlFor={"name"} className={"form-label"}>Nom</label>
    <input type="text" name="name" className={"form-control"} value={name} onChange={e=>setName(e.target.value)} ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"description"} className={"form-label"}>Description</label>
    <input type="text" name="description" className={"form-control"} value={description} onChange={e=>setDescription(e.target.value)}  ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"isbn"} className={"form-label"}>isbn</label>
    <input type="text" name="isbn" className={"form-control"} value={isbn} onChange={e=>setIsbn(e.target.value)} ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"auteur"} className={"form-label"}>Auteur</label>
    <input type="text" name="auteur" className={"form-control"} value={auteur} onChange={e=>setAuteur(e.target.value)} ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"editeur"} className={"form-label"}>Editeur</label>
    <input type="text" name="editeur" className={"form-control"} value={editeur} onChange={e=>setEditeur(e.target.value)}  ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"category"} className={"form-label"}>Categories</label>
    <select  onChange={(e)=>setselectCat(e.target.value)}class="form-select">
{categories.map((elem,index)=>{


    {if(selectCat == elem._id){

        return  <option key={index} value={index} selected>{elem.name}</option>
    }   
    else 
        return <option key={index} value={index}>{elem.name}</option>
    }

})}
        </select>
        </div>



    <div className={"mb-3 cs-form"}>
    <label htmlFor={"date_publication"} className={"form-label"}>Date Publication</label>
    <input type="Date" name="date_publication" className={"form-control"} defaultValue={new Date().toISOString().slice(0,10)} onChange={e=>setDatePub(e.target.value)}  ></input>
    </div>
   <div className={"mb-3"}>
<input className={"btn btn-success"} type="submit" value={"Enregistrer"}/>
<input className={"btn btn-dark"} type="reset" value={"Annuler"}/>
   </div>
    
        </form>
    )
}
export default BookEdit