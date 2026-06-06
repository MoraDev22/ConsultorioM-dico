import { NextFunction, Request, Response } from "express";
const errorMessage = {
    error: "Es necesario todos los campos"
};

const ValidateDoctorData = (req: Request, res: Response, next: NextFunction) => {
    const {
            name,
            surname_p,
            surname_m,
            gender,
            professionalID,
            specialty,
            phone,
            email
    } = req.body;
    if(!name || !surname_p || !surname_m || !gender || !professionalID || !specialty || !phone  || !email ){
        return res.status(400).json(errorMessage);
    }

    next();
}

const ValidateAppointmentData = (req: Request, res: Response, next: NextFunction) => {
    const {
        doctor,
        patient,
        date,
        hour
    } = req.body;

    if(!doctor.doctorID || !patient.patientID || !date || !hour){
        return res.status(400).json(errorMessage);
    }

    next();
}

const ValidatePatientData = (req: Request, res: Response, next: NextFunction) => {
    const {
        name,
        surname_p,
        surname_m,
        birthdayDate,
        gender,
        phone,
        email,
        adress,
        bloodType,
        allergies,
        weight,
        stature,
        emergencyContact
    } = req.body;

    if(
        !name || !surname_p || !surname_m || !birthdayDate || !gender || !phone || !email ||
        !adress || !bloodType || !allergies || !weight || !stature || !emergencyContact
    )  return res.status(400).json(errorMessage);

    next();
}

export {ValidateDoctorData, ValidateAppointmentData, ValidatePatientData};