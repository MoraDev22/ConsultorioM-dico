import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import AppointmentsRouter from './routers/citasRouter';
import DoctorsRouter from './routers/medicosRouter';
import PatientsRouter from './routers/pacientesRoutes';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.get('/', (req: Request,res: Response) => {
    res.send('Hello World');
});

app.use('/citas', AppointmentsRouter);
app.use('/medicos', DoctorsRouter);
app.use('/pacientes', PatientsRouter);

export default app;