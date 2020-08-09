import express from 'express';
import gradesRouter from './routes/controlgrades.js';
import { promises as fs } from 'fs';

const app = express();
app.use(express.json());

app.use('/grades-control-api', gradesRouter);



app.listen(3000, async() => {
    console.log('Api Started!')
});