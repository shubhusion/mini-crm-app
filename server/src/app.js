const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/customers', require('./routes/customer.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/campaigns', require('./routes/campaign.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));