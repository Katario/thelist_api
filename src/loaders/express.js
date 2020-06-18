import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api/index';
import config from '../config/config';

let App = ({ app }) => {
  // Why Health checkpoints here?
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms raw string into json
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());

  // Catch 404 & forward to err handlers
  app.use((req, res, next) => {
    const err = new Error('Not found');
    err['status'] = 404;
    next(err);
  });

  // error handlers
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

export default App;
