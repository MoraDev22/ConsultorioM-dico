import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.get('/', (req: Request,res: Response) => {
    res.send('Hello World');
});

export default app;