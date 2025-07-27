import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/Doctor.js";
import reviewRoute from "./routes/review.js";
import bookingRoute from "./routes/booking.js";
import ai from "./routes/ai.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: [
        "https://doctor-appointments-using-mern-stack.vercel.app",
        "https://doctor-appointments-using-mern-stack-ub19.vercel.app",
        "https://doctor-appointment-app-6wst.vercel.app/",
        "http://localhost:3000"
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/doctors', doctorRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/bookings', bookingRoute);
app.use('/api/ai', ai);

app.get('/', (req, res) => {
    res.send("API is working");
});

// DB Connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Database connected");
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
    }
};

app.listen(port, async() => {
    await connectDB();
    console.log("🚀 Server running on port " + port);
});
