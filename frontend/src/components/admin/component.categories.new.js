import { useState } from "react"
import catServices from "../../services/categories.service"
import { useNavigate } from "react-router-dom"
function CatNew(){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    
    const navigate=useNavigate()
    async function handelForm(e){
        e.preventDefault()
        const categorie={'name':name,'description':description}
        catServices.addcategories(categorie)
navigate("/admin/categories")
    }
    return(
        <form className={"mt-5"} onSubmit={e=> handelForm(e)}>
            <h3>Ajouter Votre Categorie:</h3>
<div className={"mb-3"}>
    <label htmlFor={"name"} className={"form-label"}>Nom</label>
    <input type="text" className={"form-control"} onChange={e=>setName(e.target.value)} id={"name"} ></input>
    </div>
    <div className={"mb-3"}>
    <label htmlFor={"description"} className={"form-label"}>Description</label>
    <input type="text" className={"form-control"} onChange={e=>setDescription(e.target.value)} id={"description"} ></input>
    </div>
  
   <div className={"mb-3"}>
<input className={"btn btn-success"} type="submit" value={"Enregistrer"}/>
<input className={"btn btn-dark"} type="reset" value={"Annuler"}/>
   </div>
    
        </form>
    )
}
export default CatNew