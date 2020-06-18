import expressLoader from './express';
import mongooseLoader from './mongoose';

let Load = async ({ app }) => {
  await mongooseLoader();
  console.log('db loaded');

  await expressLoader({ app });
  console.log('express loaded');
}

export default Load;