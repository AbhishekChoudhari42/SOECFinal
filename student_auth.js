const router = require('express').Router();
const mongoose = require('mongoose')
const Student = require('./models/Student');
const bcrypt = require("bcrypt")

router.post("/register",async (req, res)=>{

    
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        const student = await new Student({

            name:req.body.name, email:req.body.email,password:hashedPassword
        
        })

        const user  = await student.save()
        res.status(200).json(user)
    }catch(error){
        console.error(error)
    }
}) 


// student login
router.post("/login",async (req,res)=>{
    try{
     const student = await Student.findOne({email:req.body.email});
     !student && res.status(404).json("no user found");

     const validPassword = await bcrypt.compare(req.body.password,student.password);

     !validPassword && res.status(400).json("wrong password")

    res.status(200).json(student)

    }catch(error){
        console.log(error)
    }
})


module.exports = router;