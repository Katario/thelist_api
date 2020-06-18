import { Router } from 'express';
import list from './routes/list';

// import all my routes
export default() => {
  const routesApp = Router();

  list(routesApp);

  return routesApp;
}