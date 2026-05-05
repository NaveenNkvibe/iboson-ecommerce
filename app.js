const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const purchaseRouter = require('./routes/purchaseRouter');

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/purchase', purchaseRouter);

module.exports = app;