import {User} from "../Models/User";
import {Response,Request,Router} from 'express'
export class UserController{

    addUser(request:Request,response:Response) {

        let user = new User({name:request.query.name, age:request.query.age});
        user.save().then((v) => {
            response.json(v)
        }).catch((err) => {
            response.json(err)
        })

    }
    getUsers(request:Request,response:Response){
    User.find().then((res)=>{
      response.json(res)
    }).catch(
        (e)=>{
            response.json(e)
        }
    )
    }

}
