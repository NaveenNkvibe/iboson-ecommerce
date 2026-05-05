const mongoose = require('mongoose');

const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connect');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = DBConnect;