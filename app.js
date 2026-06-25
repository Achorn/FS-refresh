import express from "express";
import cors from "cors";
import noteRoutes from "./routes/notes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

export default app;
