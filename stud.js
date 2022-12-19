const router = require('express').Router();
const mongoose = require('mongoose')
const Activity = require('./models/Activity');
const Student = require('./models/Student');

router.get("/all",async(req,res)=>{
    try{
        const Activities = await Activity.find({});
        res.status(200).json(Activities);
    }catch{
        res.status(500).json(err);
    }
})
// activity registration
router.put("/register/:name",async(req,res)=>{
    const activityName = req.params.name;
    const studentId = req.body.id; 
    const ActivityId = req.body.activityId;

    try{
        const student = await Student.findById(studentId);
        await student.updateOne({$push:{
            studentRegistrations: activityName
        }
        })
        const activity = await Activity.findById(ActivityId);
        await activity.updateOne({ $push: { registrations: studentId } });
        
            res.status(200).json(student);
    }catch{
        res.status(500).json(err);
    }
})

// student Registration








module.exports = router;