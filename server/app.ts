import express, { Application } from 'express';
import cors from 'cors';
import dbConnection from './db/connection';
import staffRoute from './routes/staffRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json())

app.use("/api/staff" , staffRoute)

dbConnection();

app.listen(5000, () => {
    console.log("Server running");
})