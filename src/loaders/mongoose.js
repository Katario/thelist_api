import mongoose from 'mongoose';
import config from '../config/config';

export default async () => {
  const connection = await mongoose.connect(config.databaseURL, { 
    useNewUrlParser: true, 
    useCreateIndex: true
  });
  
  return connection.connection.db;
}