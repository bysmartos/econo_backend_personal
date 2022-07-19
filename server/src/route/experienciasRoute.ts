import {Router} from 'express';
import experienciasController from '../controller/experienciasController';


const router = Router();

router.get('/experiencias', experienciasController.getExperiencias)
router.get('/experiencias/:id', experienciasController.getOneExperiencia)
router.post('/experiencias/insert', experienciasController.postExperiencia)
router.put('/experiencias/:id', experienciasController.updateExperiencia)
router.delete('/experiencias/:id', experienciasController.deleteExperiencia)
router.post('/experiencia/filter', experienciasController.postExperienciaFilter)

export default router;