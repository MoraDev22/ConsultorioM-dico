import { Request, Response } from "express";
import AppDataSource from "../db/conecction";
import { Appointment } from "../models/Consulta";
const appointmentRepository = AppDataSource.getRepository(Appointment);
class AppointmentController {
    constructor(){}

    async getAppointments(req: Request, res : Response) {
        try{
            const appointments = await appointmentRepository.find({
                relations: {
                    patient : true
                }
            });
            if (appointments.length == 0) throw new Error("No existen Citas");
            console.log(appointments);
            return res.status(200).json(appointments);
        }catch(e){
            if (e instanceof Error)
                return res.status(500).send(e.message);
        }
    }

    async getAppointment(req: Request, res : Response) {
        try{
            const { id } = req.params;
            const appointment = await appointmentRepository.find({
                where : {
                    id : Number(id)
                },
                relations : {
                    patient : true
                }
            }
            );
            if (!appointment) throw new Error("No existe la cita");

            return res.status(200).json(appointment);
        }catch(e){
            if (e instanceof Error)
                return res.status(500).send(e.message);
        }
    }

    async insertAppointment(req: Request, res : Response){
        try{
            if(!req.body.doctor.doctorID || !req.body.patient.patientID) return res.status(400).json({message: "Error es necesario los ID"});
            await appointmentRepository.save(req.body);
            return res.status(201).json({message : "Cita registrado exitosamente!"});
        }catch(e : any){
            if (e.number === 547) return res.json({message: "El médico o paciente no existen en la tabla padre"});
            if (e instanceof Error){
                return res.status(500).send(e.message);
            }
        }
    }

    async updateAppointment(req: Request, res : Response) {
        try{
            const {id} = req.params;
            const appointment = await appointmentRepository.findOneBy({id: Number(id)});
            if( !appointment ) throw new Error("No existe la cita que se desea actualizar");

            const result = await appointmentRepository.update({id: Number(id)}, req.body);
            return res.status(200).json({message: "Cita actualizado correctamente"});
        }catch(e){
            if ( e instanceof Error )
                return res.status(500).json({message: e.message});
        }
    }

    async deleteAppointment(req: Request, res : Response){
        try{
            const {id} = req.params;
            const appointment = await appointmentRepository.findOneBy({id: Number(id)});
            if( !appointment ) throw new Error("No existe la cita que se desea eliminar");

            const result = await appointmentRepository.delete({id : Number(id)});
            return res.status(200).json({message: "Cita eliminado correctamente"});
        }catch(e){
            if ( e instanceof Error )
                return res.status(500).json({message: e.message});
        }
    }
}
export default new AppointmentController();