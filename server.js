const dotenv = require("dotenv")
dotenv.config();
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')
const helmet = require("helmet")
const morgan = require("morgan")

const app = express()

// connection
async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true})
        console.log("connected to db")

        
    }catch(error){
        console.error(error)
    }
}

connect()
mongoose.set("strictQuery", true);
// const port = process.env.PORT || 8080
const port = 5000
app.listen(port, () => console.log("💥🙂🙂😆"))
app.get("/",(req,res)=>{
    res.send("sfsfs")
})
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const adminRouter = require("./admin")
app.use("/admin/activity",adminRouter)
const studentRouter = require("./stud")
app.use("/student/activity",studentRouter)
const studentAuth = require("./student_auth")

app.use("/student/auth",studentAuth)

// app.use()



