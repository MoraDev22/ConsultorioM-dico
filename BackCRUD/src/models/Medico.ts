import{
    Check,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { Appointment } from "./Consulta";

@Entity('doctors')
@Check(`gender IN('M','F')`)
export class Doctor {
    @PrimaryGeneratedColumn()
    doctorID: number;

    @Column({
        length: 50,
        nullable: false
    })
    name : string;

    @Column({
        length: 50,
        nullable: false
    })
    surname_p : string;

    @Column({
        length: 50,
        nullable: false
    })
    surname_m : string;

    @Column({
        length: 1,
        type: "char",
        nullable: false
    })
    gender : string

    @Column({
        length : 20,
        unique: true,
        nullable: false
    })
    professionalID : string;

    @Column({
        length: 100,
        nullable: false
    })
    specialty : string;

    @Column({ length: 15 })
    phone : string;

    @Column({
        length: 100,
    })
    email : string

    @CreateDateColumn()
    hiringDate : Date

    @Column({
        type: "bit",
        default: 1
    })
    state : boolean

    @OneToMany( () => Appointment, (appointment) => appointment.doctor)
    citas : Appointment[]
}