const express=require("express")

const router=express.Router()
const userController=require("../controllers/user.controllers")

router.route("/").get(userController.getUser)
.post(userController.addUser)
module.exports=router