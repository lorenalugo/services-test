const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(cors(
  {
    server: [
      {
        origin: '*',
      },
    ],
  },
));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register routes
app.use('/', routes);

app.use(errorHandler);

app.listen('8080', () => {
  console.info('App listening on port 8080');
});
