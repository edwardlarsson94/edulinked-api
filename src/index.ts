
var express = require('express')
const app = express()
const port = 3000

var auth = require('./routes/auth.ts');

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})


