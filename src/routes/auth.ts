var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// define the auth route
router.post('/login', function(req, res) {
  console.log(req.body);
  if(req.body.email === 'user.test@gmail.com' && req.body.password === 'test.2024'){
    res.send(
      {
        "status": true,
        "data": {
            "id": "1",
            "role": "user",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3MjczMTg4OTF9.EYoP8bfvpq3YzUVUpEPysALYa2agPbSy-CsmWM6jCj8"
        },
        "errors": null
      }
    );
  }else{
    res.send(
      {
        "status": false,
        "data": null,
        "errors": {
            "code": "AUT-0001",
            "message": "User not exist"
        }
      }
    );
  }
});

module.exports = router;
