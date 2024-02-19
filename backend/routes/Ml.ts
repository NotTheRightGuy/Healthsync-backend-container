import {Router} from 'express';
import checkPatient from "../middlewares/checkPatient";
import httpProxy from 'http-proxy';
require("dotenv").config();


const app = Router();
const proxy = httpProxy.createProxyServer();

const API_PORT = process.env.PORT || 3000;
const TARGET_PORT = 5000;

app.all('/', (req, res) => {
    proxy.web(req, res, { target: `http://localhost:${TARGET_PORT}` });
});


export default app;