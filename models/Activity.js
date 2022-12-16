const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
    {
      activityName: {
        type: String,
        require: true,
        min: 3,
        max: 30,
        unique: true,
      },
      duration: {
        type: Number,
        require: true
      },
      description: {
        type: String,
        require: true,
        min: 60,
        max: 240,
      },
      status : {
        type : Boolean,
        default:false
      },
      registrations: {
        type: Array,
        default: []
      }
    
    
    },{ timestamps: true }
)


module.exports = mongoose.model("Activity", ActivitySchema);