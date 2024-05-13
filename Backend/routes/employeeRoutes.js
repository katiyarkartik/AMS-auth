import express from 'express';
import { getAllemployees ,loginemployee,registeremployee} from '../controller/employeeController.js';

const router= express.Router();

router.get('/',getAllemployees);
router.post('/register',registeremployee);
router.post('/login',loginemployee)

export default router;