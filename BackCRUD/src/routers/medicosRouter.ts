import express from 'express';
import DoctorController from './../controllers/MedicoController';
import { ValidateDoctorData } from '../middlewares/ValidateData';
const router = express.Router();

router.get('/', DoctorController.getDoctors);
router.post('/', ValidateDoctorData, DoctorController.insertDoctor);

router.route('/:id')
    .get(DoctorController.getDoctor)
    .put(ValidateDoctorData, DoctorController.updateDoctor)
    .delete(DoctorController.deleteDoctor)

export default router;