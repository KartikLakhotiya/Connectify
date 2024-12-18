import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import connectDB from "./lib/MongoDB.js";
dotenv.config();


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes)
app.get('/', (req, res) => {
    res.send("Connectify server is ready.");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectDB();
})