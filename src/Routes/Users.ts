import {Router} from "express";
let userRouter=Router({});
import {UserController} from "../Controllers/UserController";
let userController:UserController=new UserController();

userRouter.get("/users",userController.getUsers);
userRouter.get("/users/new",userController.addUser);

export {userRouter}