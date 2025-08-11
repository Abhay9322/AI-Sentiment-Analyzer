import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/ai", aiRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`✅ Server running on port ${process.env.PORT || 5000}`);

});