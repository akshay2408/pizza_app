const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');

const { connect } = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
/*
----------------
  DB Connection
----------------
*/

connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected successfully!!!');
  })
  .catch((error) => {
    console.log('Error in database connection', error.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '100mb' }));

const corsOption = {
  origin: true,
  methods: 'GET,POST,PATCH',
  credentials: true,
};

app.use(cors(corsOption));

/*
------------------
    Create Server
------------------
*/

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`App Listening on port ${port}!!!`);
});
