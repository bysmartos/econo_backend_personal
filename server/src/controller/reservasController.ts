import {Request,Response} from 'express';

import reservasModel from '../model/reservasModel';
//import { QueryResult } from 'pg';

const reservaController =  {

    getReservas: async (req:Request,res:Response)=>{
        
        const exp: any= await reservasModel.getReservas()
        res.json(exp)
 
 },
 getReservasByUser:  async (req:Request,res:Response)=>{
    const param = req.params['userid'];
    const exp:any = await reservasModel.getReservasByUser(param);
    res.json(exp);
},

}
export default reservaController;