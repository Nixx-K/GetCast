import express from "express";
import { config } from "dotenv";


// Route imports
import castingRoutes from './routes/castingRoutes.js';

config();

const app = express();



//API routes
app.use("/castings", castingRoutes);



const PORT = 5001;
const server = app.listen(PORT, () =>  {
    console.log(`Server running successfully on port ${PORT}`);
}); 