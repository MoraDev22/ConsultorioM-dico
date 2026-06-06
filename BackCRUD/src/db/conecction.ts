import { DataSource } from "typeorm"
import { Appointment } from "../models/Consulta";
import { Doctor } from "../models/Medico";
import { Patient } from "../models/Paciente";

const AppDataSource = new DataSource({
    type: "mssql",
    port: 1433,
    host: '127.0.0.1',
    username: 'sa',
    password: 'SQL_server1',
    database: 'ConsultorioDB',
    logging: true, //Muestra información en consola de lo que TypeORM esta haciendo, es decir, las consultas sql
    entities: [Appointment, Doctor, Patient],
    synchronize: false, //Sincroniza automáticamente las entidades con la base de datos
    options: {
        encrypt: false,
        trustServerCertificate: true
      }
})

export default AppDataSource;