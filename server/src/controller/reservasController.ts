import {Request,Response} from 'express';
import iReserva from '../model/interfaces/iReserva';

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
postReserva: async (req:Request,res:Response)=>{
    try{
        
        const param = req.params['userid'];
        const {experienciaId,...reservas}:iReserva = req.body;
        if(!experienciaId){
            res.status(400).json({message:'some info is missing'});
        }
        const result = await reservasModel.postReserva({experienciaId}, param);
        result
                ? res.status(201).json({ result: result.rows})
                : res.status(500).send('No se pudo crear una nueva experiencia');  
    }catch (error: any){
        res.status(400).send(error.message);
    }
}

}
export default reservaController;