import express from 'express';
import Auth from "./Auth";
import Patient from "./Patient";
import Prescription from "./Prescription";
import logger from "../middlewares/logger";
import Ml from "./Ml";

const app = express.Router();


app.use("/ml", Ml);
app.use(express.json());
app.use(logger);
app.use("/auth", Auth);
app.use("/patient", Patient);
app.use("/prescription", Prescription);
export default app;
