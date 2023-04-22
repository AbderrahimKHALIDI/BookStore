const express=require("express")
const router=express.Router()
const catalController=require("../controllers/catalogue.controller")



router.route("/").get(catalController.getCategories)
                           .post(catalController.addCategory)
                


router.route("/:id").delete(catalController.deleteCategoy)
module.exports=router