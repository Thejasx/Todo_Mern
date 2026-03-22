import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './Config/db.js';
import todoRoutes from './Routes/todoRoutes.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/authRoutes.js';

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // Vite default port
    credentials: true
}))
app.use(cookieParser());


// Routes
app.use('/api/auth', authRoutes)
app.use('/api/todo', todoRoutes)



// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



