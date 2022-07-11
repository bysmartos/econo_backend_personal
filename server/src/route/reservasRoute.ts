import {Router} from 'express';
import reservasController from '../controller/reservasController';
import { Response, Request } from "express";

const router = Router();

router.get('/reservas', reservasController.getReservas)
router.get('/reservas/:userid', reservasController.getReservasByUser)


export default router;