import http from "./http.commn";
async function getcategories(){
    return await http.get("/categories")
    
    }
    async function addcategories(category){
        return await http.post("/categories",category)
        
        }
        const deletecategories=async(id)=>{
            return await http.delete(`/categories/${id}`)
        }
    const catServices={getcategories,addcategories,deletecategories}
    
    export default catServices