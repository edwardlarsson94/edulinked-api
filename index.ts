const express = require('express')
const app = express()
const port = 3000

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// DELETE method route
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})