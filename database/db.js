import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://bhavesh:12345678bh@cluster0.qf5nzf2.mongodb.net/coaching`;
    try {
        await mongoose.connect(URL)
        .then(res => console.log('Connected to Database'));
    } catch(error) {
        console.error('Error: ', error.message);
    }  
};

export default Connection;  
    