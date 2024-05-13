import employee from "../models/employeeModel.js";
import bcrypt from "bcryptjs";
import {nanoid, customAlphabet} from "nanoid";
import jwt from 'jsonwebtoken';

export const getAllemployees = async (req, res) => {
    try {
        const employees = await employee.find();
        res.json(employees);
    }
    catch {
        console.log("cannot find employees");
        res.status(500).json({ message: error.message });

    }
}

export const registeremployee = async (req, res) => {
    try {
        const { firstName, lastName, employeeId, employeeEmail, employeePassword, employeeAvatar } = req.body;
        
        const existingemployee = await employee.findOne({ $or: [{ employeeId }, { employeeEmail }] });

        if (existingemployee) {
            res.json("employee already exists")
        } else {

           

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(employeePassword,salt,async(err,hashedPassword)=>{
                    console.log(hashedPassword);
                    const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPRQSTUVWXYZ', 10)
                    const autoGenertedEmployeeId=nanoid(5);
                    const newemployee={
                        firstName,
                        lastName,
                        employeeId:"E00" + autoGenertedEmployeeId,
                        employeeEmail,
                        employeePassword:hashedPassword,
                        employeeAvatar
                    };

                    await employee.create(newemployee);
                    res.json(newemployee);
                  
                })

            })
          
        }
    } catch (error) {
        res.json("Internal server error")
    }
};


export const loginemployee = async (req, res) => {
    try {
        const { employeeEmail, employeePassword } = req.body;
        const employeeFound = await employee.findOne({ employeeEmail });

        if (!employeeFound) {
            return res.status(404).json({ error: "employee not found" });
            
        }
        else{
        bcrypt.compare(employeePassword, employeeFound.employeePassword, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }
           else if (result) {
               
                const token = jwt.sign({ employeeEmail: employeeFound.employeeEmail }, 'my-secret', { expiresIn: '24h' }); 
                return res.json({ token });

            } else {
                return res.status(401).json({ error: "Incorrect password" });
            }
        });
    }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};