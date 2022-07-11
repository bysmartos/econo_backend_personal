import {Router} from 'express';
import experienciasController from '../controller/experienciasController';
import { Response, Request } from "express";

const router = Router();

router.get('/experiencias', experienciasController.getExperiencias)
router.get('/experiencias/:id', experienciasController.getOneExperiencia)
router.post('/experiencias/insert', experienciasController.postExperiencia)
router.put('/experiencias/:id', experienciasController.updateExperiencia)
router.delete('/experiencias/:id', experienciasController.deleteExperiencia)

export default router;