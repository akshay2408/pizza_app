const express = require('express');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');

const { connect } = require('mongoose');
const bodyParser = require('body-parser');

const { addUser, addAdmin } = require('./Seeder');

const apiRoutes = require('./routes');
const { loginAuth, signUpAuth } = require('./passport');

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
    addAdmin(); // add admin user
    addUser(); // add customer user
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
app.use('/api/v1', apiRoutes);

/*
-------------------
  Setup Passport
-------------------
*/
passport.use('signup-auth', signUpAuth);
passport.use('login-auth', loginAuth);
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
