import {NextFunction,Request,Response} from 'express';
import iUser from '../model/interfaces/iUser';
import userModel from '../model/userModel';
import jwt from '../middleware/jwtHandler';
import iUserPut from '../model/interfaces/iUserPut';


//import { QueryResult } from 'pg';

const userController =  {

    saveUser: async (req:Request,res:Response)=>{
    try{
        const {email,password,name,last_name,role, ...users}:iUser = req.body;
        if(!email || !password || !name || !last_name || !role ){
            res.status(400).json({message:'some info is missing'});
        } else {
            const result = await userModel.saveUser({email,password,name,last_name,role, ...users});
            result
                    ? res.status(201).json({ result: result.rows})
                    : res.status(500).send('No se pudo crear un nuevo usuario');  
        }
       
    }catch (error: any){
        res.status(400).send(error.message);
    }
},
    getUsers: async (req:Request,res:Response)=>{
            
        const users: any= await userModel.getUsers()
        res.json(users)

    },

    // login : async (req:Request,res:Response) =>{

    //     res.send('usuario correcto');
    // }
    login: async (req: Request, res: Response) => {
        const token:any = await jwt.generateToken(req.body.email)
        console.log(token);

        res.json({token});

    },
    // Auth: async (req: Request, res: Response) => {
    //     res.json({
    //         token: req.body
    //     })
    // }
    
    updateUser: async (req:Request,res:Response)=>{
        try{
            const param = req.params['id'];
            const {email,password,name,last_name, ...users}:iUserPut = req.body;
            if( !email || !password || !name || !last_name  ){
                res.status(400).json({message:'some info is missing'});
            } else {
                const result = await userModel.updateUser({email,password,name,last_name, ...users}, param);
                result
                        ? res.status(201).json({ result: result.rows})
                        : res.status(500).send('No se pudo modificar  un user');  
            }
           
        }catch (error: any){
            res.status(400).send(error.message);
        }
}
}
export default userController;
/*
const userController = async (req: Request, res: Response) => {

    try {
        const { email, password, ...user } = req.body as iUser;
        if (!email || !password) {
            res.status(400).send('missing some data');
        } else {
            const result:QueryResult = await userModel.saveUser({ email, password, ...user });

            result
                ? res.status(201).json({result: result.rows})
                : res.status(500).send("Failed to create a new user.");
        }
    } catch (error: any) {

        res.status(400).send(error.message);
    }
}
*/

