
var express = require('express')
const app = express()
const port = 3000

var birds = require('./routes/birds.ts');

app.use('/birds', birds);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})


