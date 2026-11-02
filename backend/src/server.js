import express from "express";

// Rout imports
import castingRoutes from './routes/castingRoutes.js';

const app = express();



//API routes
app.use("/castings", castingRoutes);



const PORT = 5001;
const server = app.listen(PORT, () =>  {
    console.log(`Server running successfully on port ${PORT}`);
}); 