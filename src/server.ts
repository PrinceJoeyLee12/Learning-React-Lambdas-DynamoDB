import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app: Application = express();

//Initialize Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5000' }));
app.use(morgan('dev'));

app.use('/api', require('./routes/api'));

const PORT: number = 5000;
app.listen(PORT, () => console.log('Listening to port 5000'));
