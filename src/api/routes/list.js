import { Router } from 'express';
import List from '../../models/list';
const route = Router();

export default (routesApp) => {
  routesApp.use('/list', route)
  // get all
  route.get('/', async (req, res) => {
    let lists = await List.find();
    return res.json({ lists }).status(200);
  });

  // get one
  // route.get('/INSERT_ID', (req, res) => {
  //   return res.json({ lists }).status(200);
  // });
  
  // route.post('/', (req, res) => {
  // });
  
  // route.delete('/', (req, res) => {
  // });
};
