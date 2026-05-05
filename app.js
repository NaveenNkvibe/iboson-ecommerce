const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
cors();

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/userRouter');
const purchaseRouter = require('./routes/userRouter');

app.use('api/user', userRouter);
app.use('api/product', productRouter);
app.use('api/purchase', purchaseRouter);

module.exports = app;