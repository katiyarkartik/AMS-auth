import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {    
        employeeFullName:{
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
        employeePhoneNo:{
            type:Number,
            required:true,
            unique:true
        },
        employeeAadhar:{
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
        }
    }

)

const employee = mongoose.model("Employee",employeeSchema);
export default employee;