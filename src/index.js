import config from './config/config';
import express from 'express';

async function startServer() {
  const app = express();

  await require('./loaders/loaders').default({ app });

  app.listen(config.port, err => {
    if (err) {
      console.log('NOT WORKING');
      process.exit(1);

      return;
    }
    console.log(`
      #################################################
      #### Server Listening on port ${config.port} ####
      #################################################
    `);
  })
}

startServer();
