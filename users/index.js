import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import me from "./routes/me.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/me', me);

app.get('/', (req, res) => {
    res.status(200).json({
        team_name: "CTokyo Group",
        dev_team: ["Aguilar", "Angeles", "Gaylan", "Sobrevilla", "Tomas", "Villacruz"].sort()
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