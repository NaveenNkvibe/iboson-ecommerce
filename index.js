const dotenv = require('dotenv').config();
const DBConnect = require('./config/db')
DBConnect();

const app = require('./app')
app();

const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Running on port ${port}`)
})