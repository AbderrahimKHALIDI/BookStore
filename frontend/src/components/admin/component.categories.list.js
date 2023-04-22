import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


import catServices from "../../services/categories.service"


function CatList(){
 const [categories,setCategories]=useState([])
useEffect(()=>{
    getcategorie()

},[])
 async function getcategorie(){
    const result= await catServices.getcategories()
    setCategories(result.data)
}
async function delecat(id){
    await catServices.deletecategories(id)
    getcategorie()
 }


return(
    
   <div>
    <Link className={"mt-4 mb-2  btn btn-primary"} to={"/admin/categories/new"}>Ajouter</Link>
    <table className={"table table-hover table-striped"}>
<thead>
<tr>
    <th scope="col">No</th>
    <th scope="col">Nom</th>
    <th scope="col">Description</th>
    <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
    categories.map((elem,index)=>{
        return (
            <tr>
        
                <td > {index+1}</td>
                <td> {elem.name}</td>
                <td> {elem.description}</td>
                <td>
                    <button onClick={e=>delecat(elem._id)} className={"btn btn-danger"}>Supp</button>
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
export default CatList