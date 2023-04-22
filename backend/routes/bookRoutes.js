const express=require("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")

const multer=require("multer")
const path=require("path")

const storage= multer.diskStorage({
   destination:'./upload/images',
   filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
   }
})


const upload=multer({
   storage:storage
})  

router.route("/").get(catalController.getBooks) 
.post(upload.single("image"), catalController.addBook);
router.route("/:id").put(catalController.updateBook)
                          .delete(catalController.deleteBook)
                           .get(catalController.getBook)





module.exports=router  