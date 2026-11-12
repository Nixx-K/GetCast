import express from "express";
import { config } from "dotenv";
import {connectDB, disconnectDB} from "./config/db.js";

// Route imports
import castingRoutes from './routes/castingRoutes.js';
import authRoutes from './routes/authRoutes.js';

config();
connectDB();

const app = express();

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

//API routes
app.use("/castings", castingRoutes);
app.use("/auth", authRoutes);


const PORT = 5001;
const server = app.listen(PORT, () =>  {
    console.log(`Server running successfully on port ${PORT}`);
}); 



// Handling unhandled promise rejections, for example: db connection errors
process.on("unhandledRejection", (err) => {
    console.error("Unhandled rejection:", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});


//Handlking uncaught exceptions
process.on("uncaughtException", async (err) => {
    console.error("Uncaught exception:", err);
    await disconnectDB();
    process.exit(1);
});


//Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, graceful shutdown initiated");
    server.close(async () => {
        await disconnectDB();
        process.exit(0); //gracefully <3
    });
});