import {Router} from 'express';
import httpProxy from 'http-proxy';
import {RequestHandler} from "express";
require("dotenv").config();

const app = Router();
const proxy = httpProxy.createProxyServer();
const TARGET_PORT = 5000;

const proxyMiddleware: RequestHandler = (req, res) => {
    // Add content-type to headers
    res.setHeader('Content-Type', 'application/json');
    proxy.web(req, res, { target: `http://localhost:${TARGET_PORT}` });
}

app.all('/*', proxyMiddleware);

export default app;