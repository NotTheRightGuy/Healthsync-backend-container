import Router from 'express';
import Auth from "./Auth";
import Patient from "./Patient";
import Prescription from "./Prescription";
import Ml from "./Ml";
const app = Router();

app.use("/auth", Auth);
app.use("/patient", Patient);
app.use("/prescription", Prescription);
app.use("/ml", Ml);
export default app;
