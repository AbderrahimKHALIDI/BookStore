const mongoose=require("mongoose")
const express=require("express")


const app=express()
const cors = require("cors")
const catRoutes=require("./routes/categoryRoutes")
const bookRoutes=require("./routes/bookRoutes")
const userRoutes=require("./routes/user.routes")

const loggingMiddelwares=require("./middlewares/logging_middelwares")







app.use(cors({origin:"*"}))
app.use(express.json())


app.use("/categories",catRoutes) 
app.use("/books",bookRoutes)
app.use("/users",userRoutes)
app.use(loggingMiddelwares.loggignfUrl)
app.use(loggingMiddelwares.loggignParamas)

require("dotenv").config()

     mongoose.connect(process.env.MONGO_URL).then(result=>
        app.listen(process.env.PORT,()=>{
           console.log("server is runing")
        })
        
        ).catch(error=>console.log(error))



