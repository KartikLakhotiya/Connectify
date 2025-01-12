import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectDB from "./lib/MongoDB.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get('/', (req, res) => {
    res.send("Connectify server is ready.");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectDB();
})