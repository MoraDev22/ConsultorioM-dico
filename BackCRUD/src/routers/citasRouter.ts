import express from 'express';
import AppointmentController from './../controllers/ConsultaController';
import { ValidateAppointmentData } from '../middlewares/ValidateData';
const router = express.Router();

router.get('/', AppointmentController.getAppointments);
router.post('/', ValidateAppointmentData, AppointmentController.insertAppointment);

router.route('/:id')
    .get(AppointmentController.getAppointment)
    .put(ValidateAppointmentData, AppointmentController.updateAppointment)
    .delete(AppointmentController.deleteAppointment)

export default router;