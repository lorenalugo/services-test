const express = require('express');
const cors = require('cors');
const config = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const { port, permision } = config;
const app = express();

// parse application/x-www-form-urlencoded
app.use(cors(
  permision.application.cors.server,
));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register routes
app.use('/', routes);

app.use(errorHandler);

app.listen(port, () => {
  console.info(`App listening on port ${port}`);
});
