import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(email === 'user.test@gmail.com' && password === 'test.2024'){
      res.json(
        {
          "status": true,
          "data": {
              "id": "2",
              "role": "user",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3MjczMTg4OTF9.EYoP8bfvpq3YzUVUpEPysALYa2agPbSy-CsmWM6jCj8"
          },
          "errors": null
        }
      );
    }else{
      res.json(
        {
          "status": false,
          "data": null,
          "errors": {
              "code": "AUT-0002",
              "message": "User not exist"
          }
        }
      );
    }
};