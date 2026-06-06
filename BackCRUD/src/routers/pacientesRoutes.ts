import express from 'express';
import PatientController from './../controllers/PacienteController';
import { ValidatePatientData } from '../middlewares/ValidateData';
const router = express.Router();

router.get('/', PatientController.getPatients);
router.post('/', ValidatePatientData , PatientController.insertPatient);

router.route('/:id')
    .get(PatientController.getPatient)
    .put(ValidatePatientData, PatientController.updatePatient)
    .delete(PatientController.deletePatient)
export default router;