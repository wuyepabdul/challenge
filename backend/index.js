import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import sectorRoutes from "./routes/sectorRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["https://challenge-mern-frontend.vercel.app"],
  methods: ["POST", "GET", "PUT"],
  credentials: true,
};

app.get("/api", (req, res) => {
  res.send("Welcome to challenge API");
});

dbConnect();

// middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/sector", sectorRoutes);

app.listen(port, () => {
  console.log("server listening at " + port);
});
