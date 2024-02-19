import express from 'express';
import cors from 'cors';
import routes from './routes';
require("dotenv").config();

const app = express();

app.use(cors());
app.use("/api/v1", routes);

app.get('/',(req, res) => {
    res.send('Express Server for HealthSync');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
