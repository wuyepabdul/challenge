import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: true,
};

app.get("/api", (req, res) => {
  res.send("Welcome to medicare API");
});

dbConnect();

// middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log("server listening at " + port);
});
