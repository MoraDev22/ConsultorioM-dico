import AppDataSource from "../db/conecction";
import { Request, Response } from "express";
import { Doctor } from "../models/Medico";

const DoctorsRepository = AppDataSource.getRepository(Doctor);
class DoctorController {
    constructor(){}

    async getDoctors(req : Request, res : Response){
        try{
            const doctors = await DoctorsRepository.find({
                relations : {
                    citas : true
                }
            });
            if ( doctors.length == 0 ) throw new Error("No existen doctores registrados");
            return res.status(200).json(doctors);
        }catch(e){
            if ( e instanceof Error)
                return res.status(500).send(e.message);
        }
    }
    
    async getDoctor(req : Request, res : Response) {
        try{
            const { id } = req.params;
            const doctor = await DoctorsRepository.find({
                where : {
                    doctorID : Number(id)
                },
                relations : {
                    citas : true
                }
            })
            if ( !doctor ) throw new Error("No existe el médico en la DB");
            return res.status(200).json(doctor);
        }catch(e){
            if ( e instanceof Error )
                return res.status(500).send(e.message);
        }   
    }
    
    async insertDoctor(req : Request, res : Response){
        try{
            console.log(req.body);
            const result = DoctorsRepository.save(req.body);
                
            return res.status(201).json({message: "Médico Registrado Exitosamente"});
        }catch(e){
            if ( e instanceof Error)
                return res.status(500).send(e.message);
        }
    }
    
    async updateDoctor(req : Request, res : Response){
        try{
            const { id } = req.params;
            const findDoctor = await DoctorsRepository.findOneBy({doctorID : Number(id)});
            if( !findDoctor ) throw new Error("No existe el médico que se desea actualizar");
                
            const result = await DoctorsRepository.update({doctorID : Number(id)}, req.body);
            if( result.affected == 0 ) throw new Error("No se pudo actualizar el médico");
    
            return res.status(200).json({message: "Médico Actualizado Exitosamente"});
        }catch(e){
            if ( e instanceof Error)
                    return res.status(500).send(e.message);
        }
    }
    
    async deleteDoctor(req : Request, res : Response){
        try{
            const { id } = req.params;
            const findDoctor = await DoctorsRepository.findOneBy({doctorID : Number(id)});
            if ( !findDoctor ) throw new Error("No existe el médico que se desea Eliminar");
    
            const result = await DoctorsRepository.delete({doctorID: Number(id)});
            return res.status(200).json({message: "Médico Eliminado Exitosamente"});
        }catch(e){
            if ( e instanceof Error)
                return res.status(500).json({message : e.message});
        }
    }
}

export default new DoctorController();