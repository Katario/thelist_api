import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // Should crash
  throw new Error("! Couldn't find .env file !");
}

export default {
  port: parseInt(process.env.PORT, 10),

  // for MongoDB URL
  databaseURL: process.env.MONGO_URI,

  // Prefix api
  api: {
    prefix: '/api'
  }
};
