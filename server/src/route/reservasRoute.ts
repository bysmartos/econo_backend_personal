import {Router} from 'express';
import reservasController from '../controller/reservasController';
import { Response, Request } from "express";
import jwtHandler from '../middleware/jwtHandler';

const router = Router();

router.get('/reservas', reservasController.getReservas)
router.get('/reservas/:userid', reservasController.getReservasByUser)
router.post('/reservas/:userid',jwtHandler.validateTokenLogin, reservasController.postReserva)


export default router;