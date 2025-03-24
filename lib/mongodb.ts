import mongoose from 'mongoose';
import { logError } from './utils'; // Assuming utils.ts has a logError function

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/E-commerce';

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB using Mongoose');
    }
    return mongoose.connection;
  } catch (error) {
    logError('Failed to connect to MongoDB using Mongoose', error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log('MongoDB connection closed using Mongoose');
    }
  } catch (error) {
    logError('Failed to close MongoDB connection using Mongoose', error);
    throw error;
  }
}