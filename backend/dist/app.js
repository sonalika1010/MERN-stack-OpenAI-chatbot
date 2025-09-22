import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// Test routes for deployment verification
app.get('/', (req, res) => {
    res.json({ 
        message: 'Backend is working!', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get('/api', (req, res) => {
    res.json({ 
        message: 'API is working!', 
        version: '1.0.0' 
    });
});

// CORS configuration with environment variable support
const allowedOrigins = process.env.FRONTEND_URL 
    ? process.env.FRONTEND_URL.split(',') 
    : [
        "http://localhost:5173",
        "https://frontend-iota-ochre-83.vercel.app"
    ];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

// Other middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove morgan in production for better performance
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"));
}

// API routes
app.use("/api/v1", appRouter);

// For local development
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
    });
}

// Export for Vercel serverless functions
export default app;