import mongoose from 'mongoose';

const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit the process with failure
        });       
}