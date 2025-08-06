import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import cors from 'cors'
import reportItemRouter from "./routes/reportItemRouter.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:5173', 'https://lost-link-eight.vercel.app'];

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.use('/api/user', userRouter)
app.use('/api/item', reportItemRouter)

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server chal rha hai http://localhost:${port}`);
  });
};

startServer();