/*eslint no-console: "off" */

// require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cron = require('node-cron')

// express docs also recommend using compression:
// https://expressjs.com/en/advanced/best-practice-performance.html
// const compression = require('compression')
// app.use(compression())

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// const authController = require('./routes/auth/authController')
// const receipts = require('./routes/auth/receipts')
// const images = require('./routes/auth/images')
// const password = require('./routes/auth/password')
// // const receipts_user_id = require('./routes/auth/receipts_user_id')
// // const users = require('./routes/users')
// const projects = require('./routes/auth/projects')
// const locations = require('./routes/auth/locations')
// const users = require('./routes/auth/users')
// const forgot_password = require('./routes/noauth/forgot_password')
// const login = require('./routes/noauth/login')

// // app.use(authController)
// app.use(receipts)
// app.use(images)
// app.use(password)
// // app.use(receipts_user_id)
// // app.use(users)
// app.use(projects)
// app.use(locations)
// app.use(users)
// app.use(forgot_password)
// app.use(login)

// const Cron = require('./nodeFiles/cron')

// const runCron = cron.schedule('* 0 * * *', function () {
//   console.log(`Updating Projects at ${Date.now()}`)
//   Cron.run()
// })

// runCron.start()

// Add a 'catchall' handler, so that for any requests that don't match the one(s) outlined
// above, React's index.html file will be sent back.
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

