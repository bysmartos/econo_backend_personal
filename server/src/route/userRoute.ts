import Router from 'express';
import auth from '../middleware/auth';
import userController from '../controller/userController';
//import encryptPassword from '../middleware/auth';
const router = Router();

router.get('/user',userController.getUsers);
router.post('/user',auth.encryptPassword,userController.saveUser);

export default router;