/*eslint no-console: "off" */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
/*
* Schemas define the objects that can be queried & their
* corresponding data types (strongly typed).
*/

/*
* GraphQL clients communicate with the server via queries & mutations.
* A query also defines the resultant shape of the queried data.
*/

/*
* Resolvers are the link between schemas & data, providing functionality
* to interact with databases.
*/

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Add a 'catchall' handler, so that for any requests that don't match the one(s) outlined
// above, React's index.html file will be sent back.
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});