import express from 'express';
import { getAllEmployees ,loginEmployee,registerEmployee} from '../controller/employeeController.js';

const router= express.Router();

router.get('/',getAllEmployees);
router.post('/register',registerEmployee);
router.post('/login',loginEmployee)

export default router;