const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload");
const atsRoutes = require("./routes/ats");
const connectDB = require('./config/db');
const dotenv = require("dotenv");
const resumeRoutes = require('./routes/resumeRoutes');
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/userRoutes');

connectDB();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/ats", atsRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
