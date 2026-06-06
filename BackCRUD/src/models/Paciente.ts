import {
    Check,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { Appointment } from "./Consulta";

@Entity('patients')
@Check(`gender IN('M','F')`)
@Check(`bloodType IN('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')`)
export class Patient {
    @PrimaryGeneratedColumn()
    patientID : number;

    @Column({
        length: 50,
        nullable: false

    })
    name : string

    @Column({
        length: 50,
        nullable: false
    })
    surname_p : string

    @Column({
        length: 50,
        nullable: false
    })
    surname_m : string

    @Column({
        type: "date"
    })
    birthdayDate : string

    @Column({
        length: 1,
        type: "char",
        nullable: false
    })
    gender : string

    @Column({
        length: 15,
        nullable : false
    })
    phone : string

    @Column({
        length: 100
    }) 
    email : string

    @Column({
        type : "text"
    })
    adress : string

    @Column({
        length : 3,
        nullable : false
    })
    bloodType : string

    @Column({
        type: "text"
    })
    allergies : string

    @Column({
        type: "decimal" ,
        precision : 5,
        scale : 2
    })
    weight : number

    @Column({
        type: "decimal",
        precision: 3,
        scale: 2
    })
    stature : number

    @Column({
        length : 15
    })
    emergencyContact : string

    @CreateDateColumn()
    registrationDate : Date

    @Column({
        type: "bit",
        default: 1
    })
    status : boolean


    @OneToMany( () => Appointment, (appointment) => appointment.patient)
    citas : Appointment[]
}