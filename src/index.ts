import express from 'express';
import {Request, Response, Router} from 'express';
import mongoose from "mongoose";
import {userRouter} from "./Routes/Users";
const app = express();
const baseRouter: Router = Router();
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true}).then(r => {
    console.log(r)
});

baseRouter.use(userRouter);




app.use('/api', baseRouter);
app.listen(8080)