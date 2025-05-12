require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
// const categoryRoutes = require('./routes/category.routes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
// app.use('/api/v1/category', categoryRoutes);
app.use('/api/data', dataRoutes);
app.get('/test', (req, res) => {
  console.log("✅ /test endpoint hit");
  res.json({ success: true, message: "Test working" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});