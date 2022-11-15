import express, { Router } from 'express';
// import path from 'path';
import userDao from '../dao/userDao';

const loginRouter = Router();

loginRouter.post('/', async (req: express.Request<unknown, unknown, { id: string, password: string }, unknown, {}>, res) => {
  const { id, password } = req.body;
  const user = await userDao.getUser(id);
  console.log(id);
  if(user !== undefined && user.Password === password) {
    req.session.isLoggedIn = true;
    req.session.user = user;
    res.json({ user });
  } else {
    res.send(undefined);
  }
});

export default loginRouter;
