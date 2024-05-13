import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {    
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },        
        employeeId:{
            type:String,
            required:true,
            unique:true
        },
        employeeEmail:{
            type:String,
            required:true,
            unique:true
        },
        employeePassword:{
            type:String,
            required:true
        },
        employeeAvatar:{
            type:String,
            required:true
        }
    }


)

const employee = mongoose.model("employee",employeeSchema);
export default employee;