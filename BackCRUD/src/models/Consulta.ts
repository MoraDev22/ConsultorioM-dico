import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";

import { Doctor } from "./Medico";
import { Patient } from "./Paciente";

@Entity('appointments')
export class  Appointment {
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(
        () => Doctor,
        (doctor) => doctor.citas
    )
    @JoinColumn({name : "doctorID"})
    doctor : Doctor

    @ManyToOne(
        () => Patient,
        (patient) => patient.citas
    )
    @JoinColumn({name : "patientID"})
    patient : Patient

    @Column({
        type: "date",
        nullable: false
    })
    date : string

    @Column({
        type: "time",
        nullable: false
    })
    hour : string

}