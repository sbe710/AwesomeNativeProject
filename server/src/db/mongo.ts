import { connect } from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await connect(
            'mongodb+srv://admin:admin@cluster0.2xbap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        );
        console.log('DB connected');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
