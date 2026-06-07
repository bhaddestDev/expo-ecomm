import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  if (!ENV.DB_URL) {
    throw new Error('DB_URL environment variable is not defined');
  }
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`Connected to MONGODB: ${conn.connection.host}`);
  } catch (error) {
    console.error('MONGODB Connection error:', error.message);
    throw error;
  }
};
