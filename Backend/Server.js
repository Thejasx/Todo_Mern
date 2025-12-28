import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './Config/db.js';
import todoRoutes from './Routes/Todoroutes.js';

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/todo', todoRoutes)



// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



