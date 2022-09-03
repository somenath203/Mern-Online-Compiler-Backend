require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes');

const connectDB = require('./db/connect');

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});