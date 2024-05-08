import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import products from "./routes/products.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/products', products);

app.get('/', (req, res) => {
    res.status(200).json({
        team_name: "Tokyo Group",
        dev_team: ["Angeles, Aguilar, Gaylan, Sobrevilla, Tomas, Villazruz"].sort()
    })
});

const PORT = process.env.PORT || 5000;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const handleServerStartup = () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}

mongoose.connect(process.env.CONNECTION_URL, mongooseOptions, handleServerStartup)

export default app