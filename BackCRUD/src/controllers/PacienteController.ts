import { Request, Response } from "express";
import AppDataSource from "../db/conecction";
import { Patient } from "../models/Paciente";

const PatientsRepository = AppDataSource.getRepository(Patient);
class PatientController {
    constructor(){}

    async getPatients(req : Request, res : Response){
        try{
            const patients = await PatientsRepository.find({
                relations: {
                    citas : {
                        patient : true
                    }
                }
            });
            if ( patients.length == 0 ) throw new Error("No existen pacientes registrados");
            return res.status(200).json(patients);
        }catch(e){
            if ( e instanceof Error) return res.status(500).send(e.message);
        }
    }

    async getPatient(req : Request, res : Response) {
        try{
            const { id } = req.params;
            const patient = await PatientsRepository.find({
                where : {
                    patientID : Number(id),
                },
                relations : {
                    citas : true
                }
            });
            if ( !patient ) throw new Error("No existe el paciente en la DB");
            return res.status(200).json(patient);
        }catch(e){
            if ( e instanceof Error )
                return res.status(500).send(e.message);
        }   
    }

    async insertPatient(req : Request, res : Response){
        try{
            console.log(req.body);
            const result = PatientsRepository.save(req.body);
            
            return res.status(201).json({message: "Paciente Registrado Exitosamente"});
        }catch(e){
            if ( e instanceof Error){
                return res.status(500).send(e.message);
            }
        }
    }

    async updatePatient(req : Request, res : Response){
        try{
            const { id } = req.params;
            const findPatient = await PatientsRepository.findOneBy({patientID : Number(id)});
            if( !findPatient ) throw new Error("No existe el paciente que se desea actualizar");
            
            const result = await PatientsRepository.update({patientID : Number(id)}, req.body);
            if( result.affected == 0 ) throw new Error("No se pudo actualizar el paciente");

            return res.status(200).json({message: "Paciente Actualizado Exitosamente"});
        }catch(e){
            if ( e instanceof Error){
                return res.status(500).send(e.message);
            }
        }
    }

    async deletePatient(req : Request, res : Response){
        try{
            const { id } = req.params;
            const findPatient = await PatientsRepository.findOneBy({patientID : Number(id)});
            if ( !findPatient ) throw new Error("No existe el paciente que se desea eliminar");

            const result = await PatientsRepository.delete({patientID: Number(id)});
            return res.status(200).json({message: "Paciente Eliminado Exitosamente"});
        }catch(e){
            if ( e instanceof Error)
                return res.status(500).json({message : e.message});
        }
    }
}

export default new PatientController();